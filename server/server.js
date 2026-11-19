

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
// const rateLimit = require("express-rate-limit");
const { rateLimit, ipKeyGenerator } = require("express-rate-limit");
require("dotenv").config();


const app = express();

app.set("trust proxy", 1);

app.use(helmet());

const PORT = process.env.PORT || 5000;

// const contactLimiter = rateLimit({
//     windowMs: 15 * 60 * 1000,

//     max: 5,

//     message: {
//         success: false,
//         message: "Too many submissions. Please try again later."
//     }
// });

const contactLimiter = rateLimit({

    windowMs: 15 * 60 * 1000,

    max: process.env.NODE_ENV === "production" ? 5 : 100,

    keyGenerator: (req) => ipKeyGenerator(req.ip),

    message: {
        success: false,
        message: "Too many submissions. Please try again later."
    }

});

const personalEmailDomains = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "outlook.com",
    "live.com",
    "msn.com",
    "icloud.com",
    "me.com",
    "aol.com",
    "protonmail.com",
    "proton.me",
    "gmx.com",
    "mail.com",
    "yandex.com"
];


// --------------------------------------------------
// Middleware
// --------------------------------------------------

const allowedOrigins = [
    "http://localhost:3001",
    "http://127.0.0.1:3001",
    "http://192.168.193.1:3001",
    "https://uatweb.aithent.com"
];

function validateOrigin(req, res, next) {
    const origin = req.get("origin");

    if (!origin || !allowedOrigins.includes(origin)) {
        return res.status(403).json({
            success: false,
            message: "Invalid request origin."
        });
    }

    next();
}

app.use(cors({
    origin: allowedOrigins
}));

// app.use(cors({
//     origin: process.env.FRONTEND_URL
// }));

app.use(express.json({
    limit: "50kb"
}));


const INTERESTED_IN_LABELS = {
    productDemo: "Product Demo",
    technicalDiscussion: "Technical Discussion",
    Pricing: "Pricing",
    integration: "Integration",
    enterpriseDeployment: "Enterprise Deployment",
};

const VALID_INTERESTED_IN = new Set(Object.keys(INTERESTED_IN_LABELS));

const MAX_MESSAGE_LENGTH = 500;

const BOT_MIN_SUBMIT_MS = 1200;

function sanitizePlainText(str = "") {
    return String(str).replace(/[<>]/g, "").trim();
}

function respondBotSuccess(res) {
    return res.status(200).json({
        success: true,
        message: "Your message has been sent successfully.",
    });
}

function generateReferenceId() {
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    return `A2O-${randomNum}`;
}

const LABEL_TO_INTERESTED_IN_ID = Object.fromEntries(
    Object.entries(INTERESTED_IN_LABELS).map(([id, label]) => [label, id])
);

function normalizeInterestedIn(raw) {
    if (!Array.isArray(raw)) {
        return null;
    }

    const normalized = [];

    for (const item of raw) {
        const str = String(item).trim();

        if (!str) {
            continue;
        }

        if (VALID_INTERESTED_IN.has(str)) {
            normalized.push(str);
            continue;
        }

        const byLabel = LABEL_TO_INTERESTED_IN_ID[str];

        if (byLabel) {
            normalized.push(byLabel);
            continue;
        }

        return null;
    }

    return normalized;
}

function mapInterestedInLabels(ids) {
    return ids.map((id) => INTERESTED_IN_LABELS[id] || String(id));
}

function getClientIp(req) {
    const forwarded = req.headers["x-forwarded-for"];
    let ipAddress = forwarded
        ? String(forwarded).split(",")[0].trim()
        : req.ip || "Unknown";

    if (ipAddress.includes(":") && /^\d+\.\d+\.\d+\.\d+:/.test(ipAddress)) {
        ipAddress = ipAddress.split(":")[0];
    }

    return ipAddress;
}

function isPrivateIp(ip) {
    if (!ip || typeof ip !== "string") {
        return true;
    }

    const clean = ip.trim();

    if (
        clean === "127.0.0.1" ||
        clean === "::1" ||
        clean === "localhost" ||
        clean === "Unknown"
    ) {
        return true;
    }

    return (
        clean.startsWith("10.") ||
        clean.startsWith("192.168.") ||
        /^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(clean)
    );
}

async function getLocationFromIP(ipAddress) {
    if (isPrivateIp(ipAddress)) {
        return { country: "", state: "", city: "" };
    }

    try {
        const fields = "status,country,regionName,city";
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 1800);

        const response = await fetch(
            `http://ip-api.com/json/${encodeURIComponent(ipAddress)}?fields=${fields}`,
            { signal: controller.signal }
        );

        clearTimeout(timeout);

        if (!response.ok) {
            return { country: "", state: "", city: "" };
        }

        const data = await response.json();

        if (data.status !== "success") {
            return { country: "", state: "", city: "" };
        }

        return {
            country: data.country || "",
            state: data.regionName || "",
            city: data.city || "",
        };
    } catch {
        return { country: "", state: "", city: "" };
    }
}

function getStrapiConfig() {
    const baseUrl = (process.env.STRAPI_API_URL || "").replace(/\/$/, "");
    const token = process.env.A2ORU_STRAPI_API_TOKEN;

    if (!baseUrl || !token) {
        return null;
    }

    return { baseUrl, token };
}

async function saveA2oruInquiryToStrapi(strapiPayload) {
    const config = getStrapiConfig();

    if (!config) {
        throw new Error("Strapi is not configured.");
    }

    const response = await fetch(`${config.baseUrl}/api/a2oru-inquiries`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${config.token}`,
        },
        body: JSON.stringify({ data: strapiPayload }),
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
        throw new Error(
            `Strapi save failed (${response.status}): ${JSON.stringify(result)}`
        );
    }

    return result;
}

async function sendA2oruStrapiEmails(contact) {
    const config = getStrapiConfig();

    if (!config) {
        return;
    }

    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.token}`,
    };

    if (process.env.CONTACT_EMAIL_INTERNAL_SECRET) {
        headers["x-contact-email-secret"] =
            process.env.CONTACT_EMAIL_INTERNAL_SECRET;
    }

    const response = await fetch(`${config.baseUrl}/api/a2oru-contact-email`, {
        method: "POST",
        headers,
        body: JSON.stringify(contact),
    });

    if (!response.ok) {
        const text = await response.text().catch(() => "");
        throw new Error(
            `Strapi email trigger failed (${response.status}): ${text}`
        );
    }
}


// --------------------------------------------------
// Contact Form API
// --------------------------------------------------

app.post(
    "/api/contact",
    validateOrigin,
    contactLimiter,
    async (req, res) => {

    try {

        const {
            name,
            email,
            company,
            phone,
            message,
            interestedIn,
            website,
            website_verify_hp: websiteVerifyHp,
            consent,
            formLoadedAt,
        } = req.body;

        const honeypotFilled =
            (typeof website === "string" && website.trim()) ||
            (typeof websiteVerifyHp === "string" && websiteVerifyHp.trim());

        const submissionSpeedMs = formLoadedAt
            ? Date.now() - Number(formLoadedAt)
            : BOT_MIN_SUBMIT_MS + 1;

        const isBotTooFast =
            formLoadedAt && submissionSpeedMs < BOT_MIN_SUBMIT_MS;

        if (honeypotFilled || isBotTooFast) {
            return respondBotSuccess(res);
        }

        if (!consent) {
            return res.status(400).json({
                success: false,
                message: "Privacy consent is required to proceed.",
            });
        }

        // ------------------------------------------
        // Required field validation
        // ------------------------------------------

        const trimmedNameEarly = sanitizePlainText(name);

        if (!trimmedNameEarly || !email || !company) {

            return res.status(400).json({

                success: false,

                message:
                    "Name, email and company are required."

            });

        }

        if (trimmedNameEarly.length < 2) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid name.",
            });
        }

        // ------------------------------------------
        // Email validation
        // ------------------------------------------

        const normalizedEmail = email.trim().toLowerCase();

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(normalizedEmail)) {

            return res.status(400).json({
                success: false,
                message: "Please provide a valid work email address."
            });

        }

        const emailDomain =
            normalizedEmail.split("@")[1];

        if (personalEmailDomains.includes(emailDomain)) {

            return res.status(400).json({
                success: false,
                message: "Please use your work email address."
            });

        }

        // ------------------------------------------
        // Field length validation
        // ------------------------------------------

        if (name.length > 100) {
            return res.status(400).json({
                success: false,
                message: "Name is too long."
            });
        }

        if (email.length > 254) {
            return res.status(400).json({
                success: false,
                message: "Email address is too long."
            });
        }

        if (company.length > 150) {
            return res.status(400).json({
                success: false,
                message: "Company name is too long."
            });
        }

        if (phone && phone.length > 30) {
            return res.status(400).json({
                success: false,
                message: "Phone number is too long."
            });
        }

        if (phone && !/^[+()\d\s-]{7,20}$/.test(String(phone).trim())) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid phone number.",
            });
        }

        const sanitizedMessage = sanitizePlainText(message || "");

        if (sanitizedMessage.length > MAX_MESSAGE_LENGTH) {
            return res.status(400).json({
                success: false,
                message: "Message is too long."
            });
        }


        const normalizedInterestedIn = normalizeInterestedIn(interestedIn);

        if (
            !normalizedInterestedIn ||
            normalizedInterestedIn.length === 0 ||
            normalizedInterestedIn.length > 10
        ) {
            return res.status(400).json({
                success: false,
                message: "Please select valid options."
            });
        }

        if (!getStrapiConfig()) {
            console.error("Strapi env missing: STRAPI_API_URL or A2ORU_STRAPI_API_TOKEN");
            return res.status(503).json({
                success: false,
                message: "Unable to process your request. Please try again later.",
            });
        }

        const trimmedName = trimmedNameEarly.replace(/\s+/g, " ");
        const trimmedCompany = sanitizePlainText(company).replace(/\s+/g, " ");
        const trimmedPhone = (phone || "").trim();
        const trimmedMessage = sanitizedMessage;
        const interestedInLabel = mapInterestedInLabels(
            normalizedInterestedIn
        ).join(", ");
        const referenceId = generateReferenceId();
        const ipAddress = getClientIp(req);
        const userAgent = req.get("user-agent") || "";
        const location = await getLocationFromIP(ipAddress);
        const submittedAt = new Date().toISOString();
        const category = normalizedInterestedIn.includes("productDemo")
            ? "Product Demo"
            : "Enquiry";

        const strapiPayload = {
            fullName: trimmedName,
            businessEmail: normalizedEmail,
            companyName: trimmedCompany,
            phoneNumber: trimmedPhone || undefined,
            interestedIn: interestedInLabel,
            message: trimmedMessage || undefined,
            privacyConsent: Boolean(consent),
            submittedAt,
            ipAddress,
            userAgent,
            country: location.country,
            state: location.state,
            city: location.city,
            sourcePage: "/",
            userStatus: "New",
            category,
            referenceId,
        };

        await saveA2oruInquiryToStrapi(strapiPayload);

        try {
            await sendA2oruStrapiEmails(strapiPayload);
        } catch (emailError) {
            console.error("A2ORU Strapi email failed after save:", emailError);
        }

        console.log("A2ORU inquiry saved successfully.");


        return res.status(200).json({

            success: true,

            message:
                "Your message has been sent successfully."

        });

    } catch (error) {

        console.error(
            "Contact submission error:"
        );

        console.error(error);


        return res.status(500).json({

            success: false,

            message:
                "Unable to send your message. Please try again later."

        });

    }

});


// --------------------------------------------------
// Start Server
// --------------------------------------------------

app.listen(PORT, () => {

    console.log(
        `Backend server running on port ${PORT}`
    );

});
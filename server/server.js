

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const nodemailer = require("nodemailer");
// const rateLimit = require("express-rate-limit");
const { rateLimit, ipKeyGenerator } = require("express-rate-limit");
require("dotenv").config();


const app = express();

app.set("trust proxy", 1);

app.use(helmet());

const PORT = process.env.PORT || 5000;

const currentYear = new Date().getFullYear();

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

    max: 5,

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


// --------------------------------------------------
// SMTP Transporter
// --------------------------------------------------

const transporter = nodemailer.createTransport({

    host: process.env.SMTP_HOST,

    port: 465,

    secure: false,

    ignoreTLS: true,

    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD
    }

});


// --------------------------------------------------
// Verify SMTP Connection
// --------------------------------------------------

transporter.verify((error) => {

    if (error) {

        console.error("SMTP connection failed:");
        console.error(error);

    } else {

        console.log("SMTP server is ready.");

    }

});


// Escapr HTMl
function escapeHtml(value = "") {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
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
            website
        } = req.body;

        if (website) {
        return res.status(400).json({
            success: false,
            message: "Invalid submission."
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
        // Required field validation
        // ------------------------------------------

        if (!name || !email || !company) {

            return res.status(400).json({

                success: false,

                message:
                    "Name, email and company are required."

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

        if (message && message.length > 3000) {
            return res.status(400).json({
                success: false,
                message: "Message is too long."
            });
        }


        if (
            !Array.isArray(interestedIn) ||
            interestedIn.length === 0 ||
            interestedIn.length > 10
        ) {
            return res.status(400).json({
                success: false,
                message: "Please select valid options."
            });
        }

        if (interestedIn.some(item => String(item).length > 100)) {
            return res.status(400).json({
                success: false,
                message: "Invalid selection."
            });
        }

        const safeName = escapeHtml(name);
        const safeCompany = escapeHtml(company);
        const safePhone = escapeHtml(phone || "Not provided");
        const safeMessage = escapeHtml(message || "Not provided");

        const safeInterestedIn = interestedIn
            .map(item => escapeHtml(item))
            .join(", ");


        // ------------------------------------------
        // Email
        // ------------------------------------------

        const mailOptions = {

            from: process.env.EMAIL_FROM,

            to: process.env.ADMIN_EMAIL,

            // cc: process.env.ADMIN_CC,

            replyTo: normalizedEmail,

            subject: `New A2ORU Product Enquiry`,

            html: `
                <!DOCTYPE html>

                <html>

                <head>

                    <meta charset="UTF-8">

                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    >

                    <title>A2ORU Product Enquiry</title>

                </head>

                <body
                    style="
                        margin: 0;
                        padding: 0;
                        background-color: #F8F7F8;
                        font-family: Arial, Helvetica, sans-serif;
                    "
                >

                    <div
                        style="
                            max-width: 650px;
                            margin: 30px auto;
                            background: #ffffff;
                            border-radius: 8px;
                            overflow: hidden;
                            border: 1px solid #E0E0E0;
                        "
                    >

                        <!-- Header -->

                        <div
                            style="
                                padding: 24px;
                                background: #123D94;
                                color: #ffffff;
                            "
                        >

                            <h2
                                style="
                                    margin: 0;
                                    font-size: 22px;
                                    line-height: 1.4;
                                    font-weight: 600;
                                "
                            >
                                New A2ORU Product Enquiry
                            </h2>

                            <p
                                style="
                                    margin: 8px 0 0;
                                    font-size: 14px;
                                    line-height: 1.5;
                                    color: #ffffff;
                                    opacity: 0.9;
                                "
                            >
                                A new product enquiry has been submitted
                                through the A2ORU website.
                            </p>

                        </div>


                        <!-- Contact Details -->

                        <div style="padding: 24px;">

                            <h3
                                style="
                                    margin: 0 0 18px;
                                    color: #1A1A1A;
                                    font-size: 17px;
                                    line-height: 1.4;
                                    font-weight: 600;
                                "
                            >
                                Contact Details:
                            </h3>


                            <table
                                width="100%"
                                cellpadding="0"
                                cellspacing="0"
                                style="
                                    width: 100%;
                                    border-collapse: collapse;
                                    border: 1px solid #E0E0E0;
                                    border-radius: 6px;
                                    overflow: hidden;
                                    font-size: 14px;
                                "
                            >

                                <!-- Name -->

                                <tr>

                                    <td
                                        style="
                                            width: 150px;
                                            padding: 12px 14px;
                                            background-color: #F8F7F8;
                                            border-bottom: 1px solid #E0E0E0;
                                            color: #4A4A4A;
                                            font-weight: 600;
                                            vertical-align: top;
                                        "
                                    >
                                        Name
                                    </td>

                                    <td
                                        style="
                                            padding: 12px 14px;
                                            border-bottom: 1px solid #E0E0E0;
                                            color: #4A4A4A;
                                            vertical-align: top;
                                        "
                                    >
                                        ${safeName}
                                    </td>

                                </tr>


                                <!-- Work Email -->

                                <tr>

                                    <td
                                        style="
                                            width: 150px;
                                            padding: 12px 14px;
                                            background-color: #F8F7F8;
                                            border-bottom: 1px solid #E0E0E0;
                                            color: #4A4A4A;
                                            font-weight: 600;
                                            vertical-align: top;
                                        "
                                    >
                                        Work Email
                                    </td>

                                    <td
                                        style="
                                            padding: 12px 14px;
                                            border-bottom: 1px solid #E0E0E0;
                                            color: #4A4A4A;
                                            vertical-align: top;
                                        "
                                    >

                                        <a
                                            href="mailto:${normalizedEmail}"
                                            style="
                                                color: #0089D3;
                                                text-decoration: none;
                                            "
                                        >
                                            ${normalizedEmail}
                                        </a>

                                    </td>

                                </tr>


                                <!-- Company -->

                                <tr>

                                    <td
                                        style="
                                            width: 150px;
                                            padding: 12px 14px;
                                            background-color: #F8F7F8;
                                            border-bottom: 1px solid #E0E0E0;
                                            color: #4A4A4A;
                                            font-weight: 600;
                                            vertical-align: top;
                                        "
                                    >
                                        Company
                                    </td>

                                    <td
                                        style="
                                            padding: 12px 14px;
                                            border-bottom: 1px solid #E0E0E0;
                                            color: #4A4A4A;
                                            vertical-align: top;
                                        "
                                    >
                                        ${safeCompany}
                                    </td>

                                </tr>


                                <!-- Phone -->

                                <tr>

                                    <td
                                        style="
                                            width: 150px;
                                            padding: 12px 14px;
                                            background-color: #F8F7F8;
                                            color: #4A4A4A;
                                            font-weight: 600;
                                            vertical-align: top;
                                        "
                                    >
                                        Phone
                                    </td>

                                    <td
                                        style="
                                            padding: 12px 14px;
                                            color: #4A4A4A;
                                            vertical-align: top;
                                        "
                                    >
                                        ${safePhone || "Not provided"}
                                    </td>

                                </tr>

                            </table>


                            <!-- Interested In -->

                            <h3
                                style="
                                    margin: 20px 0 14px;
                                    color: #1A1A1A;
                                    font-size: 17px;
                                    line-height: 1.4;
                                    font-weight: 600;
                                "
                            >
                                Interested In:
                            </h3>

                            <div
                                style="
                                    padding: 14px;
                                    background: #F8F7F8;
                                    border: 1px solid #E0E0E0;
                                    border-radius: 6px;
                                    color: #4A4A4A;
                                    line-height: 1.5;
                                    font-size: 14px;
                                "
                            >
                                ${safeInterestedIn}
                            </div>


                            <!-- Message -->

                            <h3
                                style="
                                    margin: 20px 0 14px;
                                    color: #1A1A1A;
                                    font-size: 17px;
                                    line-height: 1.4;
                                    font-weight: 600;
                                "
                            >
                                Message:
                            </h3>

                            <div
                                style="
                                    padding: 16px;
                                    background: #F8F7F8;
                                    border: 1px solid #E0E0E0;
                                    border-radius: 6px;
                                    color: #4A4A4A;
                                    line-height: 1.6;
                                    font-size: 14px;
                                    white-space: pre-line;
                                "
                            >
                                ${safeMessage || "Not provided"}
                            </div>

                        </div>


                        <!-- Footer -->

                        <div
                            style="
                                padding: 14px 24px;
                                background: #123D94;
                                border-top: 1px solid #123D94;
                                color: #ffffff;
                                font-size: 12px;
                                line-height: 1.5;
                                text-align: center;
                            "
                        >

                            © ${currentYear}&nbsp;

                            <a
                                href="https://www.aithent.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style="
                                    color: #ffffff;
                                    text-decoration: underline;
                                "
                            >
                                Aithent Inc.
                            </a>

                            &nbsp;All Rights Reserved.

                        </div>

                    </div>

                </body>

                </html>
            `
        };


        // ------------------------------------------
        // Send Email
        // ------------------------------------------

        await transporter.sendMail(mailOptions);


        console.log(
            "Contact form email sent successfully."
        );


        return res.status(200).json({

            success: true,

            message:
                "Your message has been sent successfully."

        });

    } catch (error) {

        console.error(
            "Email sending error:"
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
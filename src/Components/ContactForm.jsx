import { ChevronsRight } from "lucide-react";
import { useState } from "react";

function ContactForm() {

    const ContactFromOptions = [
        {
            id: "productDemo",
            labelName: "Product Demo",
        },
        {
            id: "technicalDiscussion",
            labelName: "Technical Discussion",
        },
        {
            id: "Pricing",
            labelName: "Pricing",
        },
        {
            id: "integration",
            labelName: "Integration",
        },
        {
            id: "enterpriseDeployment",
            labelName: "Enterprise Deployment",
        }
    ];

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

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        interestedIn: []
    });

    const [errors, setErrors] = useState({});

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [submitStatus, setSubmitStatus] = useState("");

    const [submitMessage, setSubmitMessage] = useState("");


    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: ""
        }));

        setSubmitStatus("");

        setSubmitMessage("");
    };


    const handleCheckboxChange = (e) => {

        const { value, checked } = e.target;

        setFormData((prev) => ({
            ...prev,

            interestedIn: checked
                ? [...prev.interestedIn, value]
                : prev.interestedIn.filter(
                    (item) => item !== value
                )
        }));

        setErrors((prev) => ({
            ...prev,
            interestedIn: ""
        }));

        setSubmitStatus("");

        setSubmitMessage("");
    };


    const validateForm = () => {

        const newErrors = {};

        const name = formData.name.trim();

        const email = formData.email.trim();

        const company = formData.company.trim();

        const phone = formData.phone.trim();


        // Name validation

        if (!name) {

            newErrors.name = "Name is required.";

        } else if (name.length < 2) {

            newErrors.name =
                "Please enter a valid name.";

        }


        // Email validation

        if (!email) {

            newErrors.email =
                "Work email is required.";

        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ) {

            newErrors.email =
                "Please enter a valid email address.";

        } else {

            const emailDomain = email
                .split("@")[1]
                .toLowerCase();

            if (
                personalEmailDomains.includes(
                    emailDomain
                )
            ) {

                newErrors.email =
                    "Please use your work email address.";

            }
        }


        // Company validation

        if (!company) {

            newErrors.company =
                "Company is required.";

        }


        // Phone validation

        if (
            phone &&
            !/^[+()\d\s-]{7,20}$/.test(phone)
        ) {

            newErrors.phone =
                "Please enter a valid phone number.";

        }


        // Interested In validation

        if (
            formData.interestedIn.length === 0
        ) {

            newErrors.interestedIn =
                "Please select at least one option.";

        }


        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;

    };


    const handleSubmit = async (e) => {

        e.preventDefault();


        // Clear previous submission message

        setSubmitStatus("");

        setSubmitMessage("");


        // Validate form

        const isValid = validateForm();

        if (!isValid) {

            return;

        }


        setIsSubmitting(true);


        try {

            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/api/contact`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(formData)
                }
            );


            const result = await response.json();


            if (!response.ok) {

                throw new Error(
                    result.message ||
                    "Unable to submit the form."
                );

            }


            // --------------------------------------
            // Success
            // --------------------------------------

            setSubmitStatus("success");

            setSubmitMessage(
                result.message ||
                "Your message has been sent successfully."
            );


            // Clear form

            setFormData({
                name: "",
                email: "",
                company: "",
                phone: "",
                message: "",
                interestedIn: []
            });


            // Clear validation errors

            setErrors({});


        } catch (error) {

            console.error(
                "Submit error:",
                error
            );


            // --------------------------------------
            // Error
            // --------------------------------------

            setSubmitStatus("error");

            setSubmitMessage(
                error.message ||
                "Something went wrong. Please try again."
            );


        } finally {

            setIsSubmitting(false);

        }

    };


    return (

        <form
            onSubmit={handleSubmit}
            noValidate
        >

            {/* Name */}

            <div className="inputGroup">

                <label htmlFor="name">

                    Name{" "}

                    <span className="requiredStar">
                        *
                    </span>

                </label>


                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Peter"
                />


                {errors.name && (

                    <span className="errorMessage">

                        {errors.name}

                    </span>

                )}

            </div>


            {/* Email */}

            <div className="inputGroup">

                <label htmlFor="email">

                    Work Email{" "}

                    <span className="requiredStar">
                        *
                    </span>

                </label>


                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                />


                {errors.email && (

                    <span className="errorMessage">

                        {errors.email}

                    </span>

                )}

            </div>


            {/* Company */}

            <div className="inputGroup">

                <label htmlFor="company">

                    Company{" "}

                    <span className="requiredStar">
                        *
                    </span>

                </label>


                <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Aithent Inc."
                />


                {errors.company && (

                    <span className="errorMessage">

                        {errors.company}

                    </span>

                )}

            </div>


            {/* Phone */}

            <div className="inputGroup">

                <label htmlFor="phone">
                    Phone
                </label>


                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => {

                        const value =
                            e.target.value.replace(
                                /[^0-9+()\s-]/g,
                                ""
                            );


                        setFormData((prev) => ({
                            ...prev,
                            phone: value
                        }));


                        setErrors((prev) => ({
                            ...prev,
                            phone: ""
                        }));


                        setSubmitStatus("");

                        setSubmitMessage("");

                    }}
                    placeholder="+1 (555) 000-0000"
                />


                {errors.phone && (

                    <span className="errorMessage">

                        {errors.phone}

                    </span>

                )}

            </div>


            {/* Message */}

            <div className="fullWidth inputGroup">

                <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your needs…"
                />

            </div>


            {/* Interested In */}

            <div className="fullWidth inputGroup">

                <label
                    htmlFor="interestedIn"
                    className="checkBoxBlockLabel"
                >

                    What are you interested in?{" "}

                    <span className="requiredStar">
                        *
                    </span>

                </label>


                <div className="checkBoxBlock">

                    {ContactFromOptions.map(
                        (item) => (

                            <div key={item.id}>

                                <input
                                    type="checkbox"
                                    name="interestedIn"
                                    value={item.labelName}
                                    id={item.id}
                                    checked={
                                        formData.interestedIn.includes(
                                            item.labelName
                                        )
                                    }
                                    onChange={
                                        handleCheckboxChange
                                    }
                                />


                                <label htmlFor={item.id}>

                                    {item.labelName}

                                </label>

                            </div>

                        )
                    )}


                    {errors.interestedIn && (

                        <span className="errorMessage">

                            {errors.interestedIn}

                        </span>

                    )}

                </div>

            </div>


            {/* Submit */}

            <div className="btnGroup">

                <button
                    type="submit"
                    className="btn"
                    disabled={isSubmitting}
                >

                    <span className="btn-txt">

                        {isSubmitting
                            ? "Sending..."
                            : "Submit"
                        }

                    </span>


                    <span className="btn-icon">

                        <ChevronsRight
                            className="btnIcon"
                        />

                    </span>

                </button>

            </div>


            {/* Submission Message */}

            {submitMessage && (

                <p
                    className={
                        submitStatus === "success"
                            ? "successMessage"
                            : "errorMessage"
                    }
                >

                    {submitMessage}

                </p>

            )}

        </form>

    );

}

export default ContactForm;
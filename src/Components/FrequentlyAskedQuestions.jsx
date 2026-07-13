import React from 'react';
import {useState, useRef} from 'react';
import faqImage from "../Assets/faqImage.jpg";
import Counter from "../Components/Common/Counter";
import "../CSS/FrequentlyAskedQuestions.css";


const FaqData = [
    {
        question: "What is A2ORU?",
        answer: "A2ORU is an enterprise Authentication and Authorization platform that centralizes user authentication, identity management, application access, and security policy administration.",
    },
    {
        question: "How does A2ORU improve security?",
        answer: "A2ORU strengthens security with multi-method authentication, role-based access control, configurable password policies, OTP management, eSign verification, and centralized monitoring.",
    },
    {
        question: "Can multiple organizations be managed?",
        answer: "Yes. Administrators can create, manage, search, edit, and monitor multiple organizations through a centralized dashboard while maintaining secure administrative workflows.",
    },
    {
        question: "Does A2ORU support role-based permissions?",
        answer: "Yes. Users can be assigned permissions through organizations, departments, groups, and applications, ensuring controlled access based on business roles.",
    },
    {
        question: "Can administrators configure security policies?",
        answer: "Yes. Password complexity, OTP settings, eSign PINs, and security question requirements can all be configured according to organizational security policies.",
    },
];

const counterData = [
    {
        number: 5,
        prefix: 0,
        suffix: "+",
        label: "Authentication Methods"
    },
    {
        number: 100,
        suffix: "%",
        label: "Role-Based Access Control"
    },
    {
        number: 7,
        prefix: 0,
        suffix: "+",
        label: "Security Policies"
    },
    {
        number: 4,
        prefix: 0,
        suffix: "+",
        label: "Management Modules"
    }
];

const TitleIcon = () => (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M26 52C40.36 52 52 40.36 52 26C52 11.64 40.36 0 26 0C11.64 0 2.77777e-05 11.64 2.77777e-05 26C-0.00919678 32.3017 2.27937 38.3905 6.43703 43.126L2.00003 52H26ZM26 12.5C24.2761 12.5 22.6228 13.1848 21.4038 14.4038C20.1848 15.6228 19.5 17.2761 19.5 19V19.508C19.5 20.171 19.2366 20.8069 18.7678 21.2758C18.299 21.7446 17.6631 22.008 17 22.008C16.337 22.008 15.7011 21.7446 15.2323 21.2758C14.7634 20.8069 14.5 20.171 14.5 19.508V19C14.5 12.649 19.649 7.5 26 7.5H26.773C32.697 7.5 37.5 12.303 37.5 18.227C37.5 22.012 35.506 25.517 32.252 27.449L31.201 28.074C30.3779 28.5629 29.6961 29.2575 29.2225 30.0896C28.749 30.9217 28.5 31.8626 28.5 32.82V33.2C28.5 33.863 28.2366 34.4989 27.7678 34.9678C27.299 35.4366 26.6631 35.7 26 35.7C25.337 35.7 24.7011 35.4366 24.2323 34.9678C23.7634 34.4989 23.5 33.863 23.5 33.2V32.82C23.4999 30.9955 23.9744 29.2022 24.8767 27.6165C25.7791 26.0307 27.0784 24.7069 28.647 23.775L29.698 23.151C30.7768 22.5103 31.6153 21.533 32.0847 20.3694C32.5541 19.2058 32.6283 17.9203 32.2961 16.7104C31.9638 15.5005 31.2434 14.4332 30.2456 13.6725C29.2477 12.9118 28.0277 12.4999 26.773 12.5H26ZM28.5 39.6C28.5 38.937 28.2366 38.3011 27.7678 37.8322C27.299 37.3634 26.6631 37.1 26 37.1C25.337 37.1 24.7011 37.3634 24.2323 37.8322C23.7634 38.3011 23.5 38.937 23.5 39.6V41.2C23.5 41.863 23.7634 42.4989 24.2323 42.9678C24.7011 43.4366 25.337 43.7 26 43.7C26.6631 43.7 27.299 43.4366 27.7678 42.9678C28.2366 42.4989 28.5 41.863 28.5 41.2V39.6Z" fill="currentColor"/>
    </svg>
);

const DefaultArrow = () => (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 5L8 11L6.25 9.5M1 5L3.333 7M1 1L8 7L9.75 5.5M15 1L12.667 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);

function FrequentlyAskedQuestions() {

    const [activeIndex, setActiveIndex] = useState(0);

    const toggleItem = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const contentRefs = useRef([]);

    return(
        <section className="faqSection sec-top-bottom-spacing section-alter-bg" id="faq">
            <div className="container">
                <div className="headingGroup">
                    <div className="subTitle"><span>FAQ</span></div>
                    <h2 className="title">Frequently Asked <span className="highlightTitle">Questions</span></h2>
                    <p className="contentWrapper">Find answers to the most common questions about A2ORU, including authentication, access management, security policies, and enterprise administration.</p>

                    <div className="counterWrapper">
                        {counterData.map((item, index) => (
                            <div className="counterList" key={index}>
                                <h3 className='counter'>
                                    <Counter
                                        end={item.number}
                                        prefix={item.prefix}
                                        suffix={item.suffix}
                                    />
                                </h3>

                                <p className='conterTitle'>{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="faq-wrapper">
                    {FaqData.map((item, index) => (
                        <div key={index} className={`FaqItem ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleItem(index)}>
                            <button className="faqTitle ">
                                <div className="titleGroup">
                                    <span className="titleIcon"><TitleIcon/></span>
                                    <span className="titleText">{item.question}</span>
                                </div>
                                <span className="toggleIcon"><DefaultArrow/></span>
                            </button>
                            <div className="faqAnswer"
                                style={{
                                    maxHeight: activeIndex === index ? `${contentRefs[index]?.scrollHeight}px` : "0px",
                                    opacity: activeIndex === index ? 1 : 0,
                                }}
                                ref={(el) => (contentRefs[index] = el)}
                                >
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FrequentlyAskedQuestions;

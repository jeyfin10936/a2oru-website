import Marquee from "react-fast-marquee";
import "../CSS/MarqueeBlock.css";

const marqueeData = [
    "Centralized Administration", 
    "Enterprise Ready", 
    "Multi-Method Authentication", 
    "Role-Based Access Control", 
    "Organization Management", 
    "Multi-Application Support",
    "Module, Field & Data-Level Security",
    "HIPAA Compliant",
    "Single Sign-On (SSO)",
    "Multi-Factor Authentication (MFA)",
];

function MarqueeBlock() {
    return (
        <section className="marqueeBlock">
            <Marquee speed={60} gradient={true} pauseOnHover={true}>
                {marqueeData.map((item, index) => (
                    <span key={index} className="marqueeItem">
                        <span className="text">{item}</span>
                        <span className="seperator"></span>
                    </span>
                ))}
            </Marquee>
        </section>
    );
}

export default MarqueeBlock;
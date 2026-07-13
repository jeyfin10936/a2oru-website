import Marquee from "react-fast-marquee";
import "../CSS/MarqueeBlock.css";

const marqueeData = [
    "Multi-Method Authentication", 
    "Role-Based Access Control", 
    "Organization Management", 
    "Security Policy Engine", 
    "Centralized Administration", 
    "Enterprise Ready",
];

function MarqueeBlock() {
    return (
        <section className="marqueeBlock">
            <Marquee speed={60} gradient={true}>
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
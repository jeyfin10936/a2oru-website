import Marquee from "react-fast-marquee";
import "../CSS/MarqueeBlock.css";

const marqueeData = [
    "SOC 2 Type II Certified", "99.9% Uptime SLA", "End-to-End Encrypted", "12,000+ Teams Worldwide", "<80ms Auth Latency", "GDPR Compliant", "50M+ Logins Secured", "ISO 27001 Certified",];

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
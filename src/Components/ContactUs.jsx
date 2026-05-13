import { Mail } from 'lucide-react';

import Button from "../Components/Common/Button";
import Links from "../Components/Common/Link";

import "../CSS/ContactUs.css";

function ContactUs() {
    return (
        <section className="ContactBlock sec-top-bottom-spacing" id='Contact'>
            <div className="container">
                <div className="contactCard">
                    <div className="headingGroup">
                        <div className="subTitle"><span>Get in Touch</span></div>
                        <h2 className="title">Let's <span className="highlightTitle">Connect</span></h2>
                        <p className="contentWrapper">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci error pariatur accusantium enim obcaecati alias est culpa facere.</p>

                        <div className="btn-group">
                            <Button link={Links.demoURL} target='_blank' text="Explore Now" />
                            <Button link={`mailto:${Links.email}`} text="Book a Demo" />
                        </div>
                    </div>
                    <div className="EmailCard text-center">
                            <span className="icon"><Mail/></span>
                            <h5 className="email"><a href='mailto:info@aithent.com'>info@aithent.com</a></h5>
                            <p className="info">Our team typically respond within 24 hours</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs;
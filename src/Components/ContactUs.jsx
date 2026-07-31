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
                         
                        <h2 className="title">Let's <span className="highlightTitle">Secure </span>Your Enterprise Identity</h2>
                        <p className="contentWrapper">Looking for a scalable Identity and Access Management platform? Connect with our experts to discover how A2ORU can simplify authentication, centralize administration, and strengthen enterprise security across your organization.</p>

                        <div className="btn-group">
                            <Button link={Links.demoURL} target='_blank' text="Explore Demo" />
                            <Button link={`mailto:${Links.email}`} text="Contact Sales" />
                        </div>
                    </div>
                    <div className="EmailCard text-center">
                            <span className="icon"><Mail/></span>
                            <h5 className="email"><a href='mailto:a2oru@aithent.com'>a2oru@aithent.com</a></h5>
                            <p className="info">Our team will contact you shortly.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs;
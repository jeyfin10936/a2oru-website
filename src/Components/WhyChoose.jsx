import { 
    ShieldCheck,
    LayoutDashboard,
    UsersRound,
    LockKeyhole
 } from 'lucide-react';

import "../CSS/WhyChoose.css";

const WhyChooseData = [
    {
        id: 1,
        icon: ShieldCheck,
        title: "Secure Authentication",
        desc: "Support multiple login methods including Username, Email, Mobile Number, Google, and Okta authentication with secure password management and account recovery.",
    },
    {
        id: 2,
        icon: LayoutDashboard,
        title: "Centralized Administration",
        desc: "Manage users, organizations, applications, sessions, passwords, and eSign credentials from a unified administrative dashboard.",
    },
    {
        id: 3,
        icon: UsersRound,
        title: "Role-Based Access Control",
        desc: "Assign permissions using organizations, groups, departments, and user roles to ensure every user has the appropriate level of access.",
    },
    {
        id: 4,
        icon: LockKeyhole,
        title: "Enterprise Security Policies",
        desc: "Configure password complexity, OTP expiration, security questions, eSign PINs, and authentication policies to meet organizational security requirements.",
    }
]

function WhyChoose () {
    return (
        <section className="WhyChooseBlock sec-top-bottom-spacing" id='ChooseUS'>
            <div className="container">
                    <div className="headingGroup text-center">
                        <div className="subTitle"><span>Why Choose A2ORU</span></div>
                          
                        <h2 className="title">Built for Organizations That <span className="highlightTitle">Prioritize</span> Security & Compliance</h2>
                        <p className="contentWrapper">A2ORU centralizes authentication, authorization, and access management with enterprise-grade security, helping organizations protect users, applications, and sensitive business data.</p>
                    </div>

                    <div className="whyChooseWrapper">
                        {WhyChooseData.map((item) => {
                            return (
                                <div className="item" key={item.id}>
                                    <span className="iconGroup">
                                    <item.icon className="icon" />
                                    </span>
                                    <h6 className="title">{item.title}</h6>
                                    <p className="description">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
            </div>
        </section>
    )
}

export default WhyChoose;
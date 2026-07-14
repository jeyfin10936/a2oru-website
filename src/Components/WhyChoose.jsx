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
        desc: "Support secure authentication with Single Sign-On (SSO), LDAP integration, Multi-Factor Authentication (MFA), SMS OTP verification, and service-level encryption for enterprise-grade identity protection.",
    },
    {
        id: 2,
        icon: LayoutDashboard,
        title: "Centralized Administration",
        desc: "Manage organizations, users, groups, departments, applications, and security policies through one centralized administration platform.",
    },
    {
        id: 3,
        icon: UsersRound,
        title: "Granular Access Control",
        desc: "Control access at the module, field, and data levels using configurable roles and permissions that align with your organizational structure.",
    },
    {
        id: 4,
        icon: LockKeyhole,
        title: "Enterprise Ready",
        desc: "Built with HIPAA-compliant architecture, service-level encryption, multi-project support, and scalable deployment for enterprise environments.",
    }
]

function WhyChoose () {
    return (
        <section className="WhyChooseBlock sec-top-bottom-spacing" id='ChooseUS'>
            <div className="container">
                    <div className="headingGroup text-center">
                        <div className="subTitle"><span>Why Choose A2ORU</span></div>
                          
                        <h2 className="title">Built for Organizations That <span className="highlightTitle">Prioritize</span> Security & Compliance</h2>
                        <p className="contentWrapper">Simplify identity management with centralized administration, flexible authentication, role-based access control, and enterprise security features designed for modern organizations.</p>
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
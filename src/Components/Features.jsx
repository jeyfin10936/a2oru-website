import "../CSS/Features.css";

import FlexibleAuthentication from "../Assets/features/Flexible Authentication.jpg"
import OrganizationUserManagement from "../Assets/features/Organization & User Management.jpg"
import MultiApplicationManagement from "../Assets/features/Multi-Application Management.jpg"
import ModuleLevelSecurity from "../Assets/features/Module-Level Security.jpg"

const FeaturesData = [
    {
        id: 1,
        image: FlexibleAuthentication,
        altText: "Feature-Image",
        title: 'Flexible Authentication',
        desc: 'Authenticate users using SSO, LDAP, Azure AD, MFA, SMS OTP, and enterprise authentication policies while supporting secure access across multiple applications.',
    },
    {
        id: 2,
        image: OrganizationUserManagement,
        altText: "Feature-Image",
        title: 'Organization & User Management',
        desc: 'Create and manage organizations, users, groups, departments, and role hierarchies through a centralized administration console.',
    },
    {
        id: 3,
        image: MultiApplicationManagement,
        altText: "Feature-Image",
        title: 'Multi-Application Management',
        desc: 'Integrate multiple enterprise applications into a single deployment while configuring application-specific modules, permissions, and security policies.',
    },
    {
        id: 4,
        image: ModuleLevelSecurity,
        altText: "Feature-Image",
        title: 'Module-Level Security',
        desc: 'Protect sensitive business information with configurable module-level, field-level, and data-level access permissions for every user role.',
    },
];


function Features() {
    return (
        <section className="FeaturesBlock sec-top-bottom-spacing section-alter-bg" id="Features">
            <div className="container">
                <div className="headingGroup text-center">
                    <div className="subTitle"><span>Key Capabilities</span></div>
                      
                    <h2 className="title">Everything You Need for <span className="highlightTitle">Enterprise </span>Identity Management</h2>
                    <p className="contentWrapper">Manage authentication, authorization, organizations, users, and applications from one secure platform designed for enterprise environments.</p>
                </div>

                <div className="FeaturesWrapper">
                    {FeaturesData.map((item,index) => (
                        <div className="FeatureItem" key={index}>
                            <div className="MediaBlock">
                                <div className="imgGroup">
                                    <img src={item.image} alt={item.altText}/>
                                </div>
                            </div>
                            <div className="ContentGroup">
                                <h3 className="itemTitle">{item.title}</h3>
                                <p className="itemDesc">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features;
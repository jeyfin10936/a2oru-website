import "../CSS/Features.css";

import FlexibleAuthentication from "../Assets/features/flexible-authentication.webp"
import OrganizationUserManagement from "../Assets/features/organization-user-management.webp"
import MultiApplicationManagement from "../Assets/features/multi-application-management.webp"
import ModuleLevelSecurity from "../Assets/features/module-level-security.webp"
import GroupModule from "../Assets/features/group-module.webp"
import MigrationModule from "../Assets/features/migration-module.webp"
import PolicyModule from "../Assets/features/policy-module.webp"

const FeaturesData = [
    {
        id: 1,
        image: FlexibleAuthentication,
        altText: "Feature-Image",
        title: 'Flexible Authentication',
        desc: 'Authenticate users using SSO, LDAP, MFA, SMS OTP, and enterprise authentication policies while supporting secure access across multiple applications.',
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
    {
        id: 5,
        image: MigrationModule,
        altText: "Feature-Image",
        title: 'Migration Module',
        desc: 'The Migration module in A2ORU is designed to onboard multiple users into the system in bulk while preserving and migrating their existing data from legacy or external sources. Rather than requiring users to be created one at a time through the standard UI, this module allows administrators to import a large user base efficiently, minimizing manual effort and reducing the risk of data entry errors.',
    },
    {
        id: 6,
        image: PolicyModule,
        altText: "Feature-Image",
        title: 'Policy Module',
        desc: "The Policy module in A2ORU enables administrators to configure and manage organization-level policies, with a primary focus on password-related security policies. Since A2ORU is a multi-tenant IAM platform, this module allows each organization to define its own policy rules independently, ensuring that security standards can be tailored to an organization's specific compliance requirements rather than applying a single global policy across all tenants.",
    },
    {
        id: 7,
        image: GroupModule,
        altText: "Feature-Image",
        title: 'Group Module',
        desc: 'The Group module in A2ORU enables administrators to create and manage roles (groups) and assign specific rights/permissions to them. These roles are then linked to users, and the system applies Role-Based Access Control (RBAC) to determine what each user can access and perform within the application — ensuring access is governed by role membership rather than being configured individually per user.',
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
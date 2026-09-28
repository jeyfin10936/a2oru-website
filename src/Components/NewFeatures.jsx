import "../CSS/NewFeatures.css";

import FlexibleAuthenticationMockup
    from "./FeatureMockups/FlexibleAuthenticationMockup";

import OrganizationUserManagementMockup
    from "./FeatureMockups/OrganizationUserManagementMockup";

import MultiApplicationManagementMockup
    from "./FeatureMockups/MultiApplicationManagementMockup";

import ModuleLevelSecurityMockup
    from "./FeatureMockups/ModuleLevelSecurityMockup";

import MigrationModuleMockup
    from "./FeatureMockups/MigrationModuleMockup";

import PolicyModuleMockup
    from "./FeatureMockups/PolicyModuleMockup";

import GroupModuleMockup
    from "./FeatureMockups/GroupModuleMockup";


const FeaturesData = [
    {
        id: 1,
        mockup: FlexibleAuthenticationMockup,
        title: 'Flexible Authentication',
        desc: 'Authenticate users using SSO, LDAP, MFA, SMS OTP, and enterprise authentication policies while supporting secure access across multiple applications.',
    },
    {
        id: 2,
        mockup: OrganizationUserManagementMockup,
        title: 'Organization & User Management',
        desc: 'Create and manage organizations, users, applications, and role hierarchies through a centralized administration console.',
    },
    {
        id: 3,
        mockup: MultiApplicationManagementMockup,
        title: 'Multi-Application Management',
        desc: 'Integrate multiple enterprise applications into a single deployment while configuring application-specific modules.',
    },
    {
        id: 4,
        mockup: ModuleLevelSecurityMockup,
        title: 'Module-Level Security',
        desc: 'Protect sensitive business information with configurable module-level access permissions for users across every organization.',
    },
    {
        id: 5,
        mockup: MigrationModuleMockup,
        title: 'Migration Module',
        desc: 'The Migration module in A2ORU is designed to onboard multiple users into the system in bulk while preserving and migrating their existing data from legacy or external sources. Rather than requiring users to be created one at a time through the standard UI, this module allows administrators to import a large user base efficiently, minimizing manual effort and reducing the risk of data entry errors.',
    },
    {
        id: 6,
        mockup: PolicyModuleMockup,
        title: 'Policy Module',
        desc: "The Policy module in A2ORU enables administrators to configure and manage organization-level policies, with a primary focus on password-related security policies. Since A2ORU is a multi-tenant IAM platform, this module allows each organization to define its own policy rules independently, ensuring that security standards can be tailored to an organization's specific compliance requirements rather than applying a single global policy across all tenants.",
    },
    {
        id: 7,
        mockup: GroupModuleMockup,
        title: 'Group Module',
        desc: 'The Group module in A2ORU enables administrators to create and manage roles (groups) and assign specific rights/permissions to them. These roles are then linked to users, and the system applies Role-Based Access Control (RBAC) to determine what each user can access and perform within the application — ensuring access is governed by role membership rather than being configured individually per user.',
    },
];


function NewFeatures() {

    return (

        <section
            className="FeaturesBlock sec-top-bottom-spacing section-alter-bg"
            id="Features"
        >

            <div className="container">

                <div className="headingGroup text-center">

                    <div className="subTitle">
                        <span>
                            Key Capabilities
                        </span>
                    </div>

                    <h2 className="title">
                        Everything You Need for{" "}

                        <span className="highlightTitle">
                            Enterprise
                        </span>{" "}

                        Identity Management
                    </h2>

                    <p className="contentWrapper">
                         Manage authentication, authorization, organizations, users, roles, and applications from one secure platform designed for enterprise environments.
                    </p>

                </div>


                <div className="FeaturesWrapper">

                    {FeaturesData.map((item) => {

                        const Mockup = item.mockup;

                        return (

                            <div
                                className="FeatureItem"
                                key={item.id}
                            >

                                <div className="MediaBlock">

                                    <div className="imgGroup">

                                        <Mockup />

                                    </div>

                                </div>


                                <div className="ContentGroup">

                                    <h3 className="itemTitle">
                                        {item.title}
                                    </h3>

                                    <p className="itemDesc">
                                        {item.desc}
                                    </p>

                                </div>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}


export default NewFeatures;
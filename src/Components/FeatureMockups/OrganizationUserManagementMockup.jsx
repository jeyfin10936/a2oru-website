import FeatureMockupFrame from "./FeatureMockupFrame";

function OrganizationUserManagementMockup() {

    return (

        <FeatureMockupFrame active={2}>

            <div className="fm-page-title">
                Organizations
            </div>

            <div className="fm-page-description">
                Manage organizations, users and roles from one place.
            </div>


            <div className="fm-org-layout">

                {/* Organization tree */}

                <div className="fm-org-tree">

                    <div className="fm-org-title">
                        <span className="fm-skeleton sm" />
                    </div>

                    <div className="fm-org-root">

                        <span className="fm-skeleton md" />

                    </div>


                    <div className="fm-org-child">

                        {[1, 2, 3].map((item) => (

                            <div
                                className="fm-org-child-item"
                                key={item}
                            >

                                <span
                                    className={`fm-skeleton ${
                                        item === 2
                                            ? "sm"
                                            : "md"
                                    }`}
                                />

                            </div>

                        ))}

                    </div>

                </div>


                {/* Users */}

                <div className="fm-org-users">

                    <div className="fm-org-title">

                        <span className="fm-skeleton sm" />

                    </div>


                    <div className="fm-user-cards">

                        {[1, 2, 3, 4].map((item) => (

                            <div
                                className="fm-user-card"
                                key={item}
                            >

                                <div className="fm-user-avatar" />

                                <span className="fm-skeleton md" />

                                <span
                                    className="fm-skeleton sm"
                                    style={{
                                        marginTop: "6px"
                                    }}
                                />

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </FeatureMockupFrame>

    );
}

export default OrganizationUserManagementMockup;
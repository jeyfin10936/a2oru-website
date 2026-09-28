import FeatureMockupFrame from "./FeatureMockupFrame";

function MultiApplicationManagementMockup() {

    return (

        <FeatureMockupFrame active={3}>

            <div className="fm-page-title">
                Edit Application
            </div>

            <div className="fm-page-description">
                Configure applications, modules and access.
            </div>


            <div className="fm-app-tabs">

                <span className="fm-app-tab">
                    <span className="fm-tab-skeleton lg" />
                </span>

                <span className="fm-app-tab">
                    <span className="fm-tab-skeleton md" />
                </span>

                <span className="fm-app-tab">
                    <span className="fm-tab-skeleton sm" />
                </span>

                <span className="fm-app-tab">
                    <span className="fm-tab-skeleton sm" />
                </span>

                <span className="fm-app-tab">
                    <span className="fm-tab-skeleton md" />
                </span>

            </div>


            <div
                className="fm-button light"
                style={{
                    width: "65px",
                    marginBottom: "8px"
                }}
            >
                + Add New
            </div>


            <div className="fm-app-grid">

                {[1, 2, 3, 4].map((item) => (

                    <div
                        className="fm-app-card"
                        key={item}
                    >

                        <div className="fm-app-icon" />

                        <span className="fm-skeleton md" />

                        <span
                            className="fm-skeleton sm"
                            style={{
                                marginTop: "6px"
                            }}
                        />

                        <span
                            className="fm-skeleton xs"
                            style={{
                                marginTop: "6px"
                            }}
                        />

                    </div>

                ))}

            </div>

        </FeatureMockupFrame>

    );
}

export default MultiApplicationManagementMockup;
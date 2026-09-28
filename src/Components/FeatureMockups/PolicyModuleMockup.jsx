import FeatureMockupFrame from "./FeatureMockupFrame";

function PolicyModuleMockup() {

    const fields = [
        "lg",
        "md",
        "sm",
        "lg",
        "md",
        "sm",
        "md",
        "lg",
    ];

    return (

        <FeatureMockupFrame active={6}>

            <div className="fm-page-title">
                Policy
            </div>

            <div className="fm-page-description">
                Configure organization-level security policies.
            </div>


            <div className="fm-policy-card">

                <div className="fm-policy-header">

                    <span className="fm-header-skeleton md" />

                </div>


                <div className="fm-policy-grid">

                    {fields.map((size, index) => (

                        <div
                            className="fm-policy-field"
                            key={index}
                        >

                            {/* Hidden field name */}

                            <span className="fm-label">

                                <span
                                    className={`fm-skeleton ${size}`}
                                />

                            </span>


                            {/* Hidden field value */}

                            <div className="fm-policy-input">

                                <span className="fm-skeleton md" />

                                {index === 7 && (
                                    <span className="fm-toggle" />
                                )}

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </FeatureMockupFrame>

    );
}

export default PolicyModuleMockup;
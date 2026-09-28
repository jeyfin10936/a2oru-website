import FeatureMockupFrame from "./FeatureMockupFrame";

function MigrationModuleMockup() {

    return (

        <FeatureMockupFrame active={5}>

            <div className="fm-page-title">
                Migration
            </div>

            <div className="fm-page-description">
                Bulk upload data using predefined templates.
            </div>


            <div className="fm-migration-cards">

                <div className="fm-migration-card">

                    <div className="fm-step">
                        1
                    </div>

                    <div className="fm-step-title">

                        <span className="fm-skeleton sm" />

                    </div>

                    <div className="fm-file-box">

                        <span className="fm-skeleton md" />

                    </div>

                    <span className="fm-skeleton sm" />

                </div>


                <div className="fm-migration-card">

                    <div className="fm-step">
                        2
                    </div>

                    <div className="fm-step-title">

                        <span className="fm-skeleton md" />

                    </div>

                    <div className="fm-file-box">

                        <span className="fm-skeleton sm" />

                    </div>

                    <span className="fm-skeleton md" />

                </div>


                <div className="fm-migration-card">

                    <div className="fm-step">
                        3
                    </div>

                    <div className="fm-step-title">

                        <span className="fm-skeleton sm" />

                    </div>

                    <div className="fm-file-box">

                        <span className="fm-skeleton md" />

                    </div>

                    <div className="fm-progress" />

                </div>

            </div>

        </FeatureMockupFrame>

    );
}

export default MigrationModuleMockup;
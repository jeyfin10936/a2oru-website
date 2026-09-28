import "../../CSS/FeatureMockups.css";

function FeatureMockupFrame({ children, active = 1 }) {

    return (

        <div className="FeatureMockup">

            {/* Top Header */}
            <div className="fm-topbar">

                <div className="fm-brand">
                    A2ORU
                </div>

                <div className="fm-search">
                    <span className="fm-search-icon">⌕</span>
                    <span className="fm-placeholder">
                        Search...
                    </span>
                </div>

                <div className="fm-top-actions">

                    <span className="fm-top-item">
                        EN
                    </span>

                    <span className="fm-top-item">
                        +
                    </span>

                    <span className="fm-avatar">
                        A
                    </span>

                </div>

            </div>


            {/* Application Body */}
            <div className="fm-body">

                {/* Sidebar */}
                <div className="fm-sidebar">

                    {[1, 2, 3, 4, 5, 6].map((item) => (

                        <span
                            className={`fm-sidebar-item ${
                                active === item ? "active" : ""
                            }`}
                            key={item}
                        />

                    ))}

                </div>


                {/* Feature Content */}
                <div className="fm-content">

                    {children}

                </div>

            </div>

        </div>

    );
}

export default FeatureMockupFrame;
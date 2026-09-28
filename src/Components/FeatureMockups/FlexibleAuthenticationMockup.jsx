function FlexibleAuthenticationMockup() {

    return (
        <div className="FeatureMockup">

            {/* Top Bar */}
            <div className="fm-topbar">

                <div className="fm-brand">
                    A2ORU
                </div>

                <div className="fm-search">

                    <span className="fm-search-icon">
                        ⌕
                    </span>

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


            {/* Body */}
            <div className="fm-body">

                {/* Sidebar */}
                <div className="fm-sidebar">

                    <span className="fm-sidebar-item"></span>

                    <span className="fm-sidebar-item active"></span>

                    <span className="fm-sidebar-item"></span>

                    <span className="fm-sidebar-item"></span>

                    <span className="fm-sidebar-item"></span>

                </div>


                {/* Content */}
                <div className="fm-content fm-auth-content">

                    <div className="fm-auth-card">

                        {/* Username */}
                        <div className="fm-input-group">

                            <div className="fm-input">

                                <span className="fm-input-icon user"></span>

                                <span className="fm-input-placeholder"></span>

                            </div>

                        </div>


                        {/* Password */}
                        <div className="fm-input-group">

                            {/* <span className="fm-label">
                                Password
                            </span> */}

                            <div className="fm-input">

                                <span className="fm-input-icon lock"></span>

                                <span className="fm-input-placeholder"></span>

                            </div>

                        </div>


                        {/* Forgot Password */}
                        <div className="fm-forgot">
                            Forgot Password?
                        </div>


                        {/* Login */}
                        <div className="fm-button fm-auth-button">
                            Login
                        </div>


                        {/* Divider */}
                        <div className="fm-divider">
                            <span>or continue with</span>
                        </div>


                        {/* Google / Okta */}
                        <div className="fm-social-buttons">

                            <div className="fm-social-button fm-google-button">

                                <span className="fm-google-icon">
                                    G
                                </span>

                                <span>
                                    Google
                                </span>

                            </div>


                            <div className="fm-social-button fm-okta-button">

                                <span className="fm-okta-icon">
                                    ✺
                                </span>

                                <span>
                                    Okta
                                </span>

                            </div>

                        </div>


                        {/* OTP / Username */}
                        <div className="fm-auth-options">

                            <div className="fm-auth-option fm-otp-option">

                                <span className="fm-option-icon">
                                    ▣
                                </span>

                                <span>
                                    Login Using OTP
                                </span>

                            </div>


                            <div className="fm-auth-option fm-forgot-user-option">

                                <span className="fm-option-icon">
                                    ♙
                                </span>

                                <span>
                                    Forgot Username?
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default FlexibleAuthenticationMockup;
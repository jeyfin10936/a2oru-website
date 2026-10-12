import { useEffect, useRef, useState } from "react";

import tabDecor from "../Assets/tab-decor.webp";

import "../CSS/ScreensCarousel.css";

import {
    Activity,
    AppWindow,
    Building2,
    ChevronDown,
    ChevronRight,
    Eye,
    FileText,
    KeyRound,
    LayoutDashboard,
    LayoutGrid,
    Link2,
    Lock,
    Monitor,
    Network,
    RefreshCw,
    Shield,
    ShieldCheck,
    Timer,
    UserCog,
    UserPlus,
    Users,
    UserPen,
} from "lucide-react";


const sliderData = [
    {
        title: "Dashboard Overview",
        tabIcon: LayoutDashboard,
        points: [
            { text: "Monitor users information", icon: Activity },
            { text: "Provide administrators with operational visibility", icon: Eye },
            { text: "Give administrators a quick overview of the environment", icon: Monitor },
        ],
    },
    {
        title: "Organization Management",
        tabIcon: Network,
        points: [
            { text: "Manage multiple organizations from a centralized platform", icon: Building2 },
            { text: "Maintain organization-specific users, roles, and applications", icon: Users },
            { text: "Control access within the appropriate organizational context", icon: ShieldCheck },
        ],
    },
    {
        title: "User Management",
        tabIcon: Users,
        points: [
            { text: "Create and manage enterprise users", icon: UserPlus },
            { text: "Maintain user profiles and account information", icon: FileText },
            { text: "Assign and manage roles", icon: Users },
            { text: "Manage user lifecycle status", icon: RefreshCw },
        ],
    },
    {
        title: "Application Management",
        tabIcon: LayoutGrid,
        points: [
            { text: "Manage multiple applications from one administration console", icon: AppWindow },
            { text: "Configure application-specific access", icon: KeyRound },
            { text: "Associate users and roles with applications", icon: Link2 },
            { text: "Manage application modules and permissions", icon: LayoutGrid },
        ],
    },
    {
        title: "Security Settings",
        tabIcon: Shield,
        points: [
            { text: "Configure authentication security policies", icon: ShieldCheck },
            { text: "Control failed-login attempts and account lockout behavior", icon: Lock },
            { text: "Configure OTP expiration and security settings", icon: Timer },
            { text: "Manage concurrent-session restrictions", icon: Monitor },
        ],
    },
    {
        title: "User Profile Edit",
        tabIcon: UserCog,
        points: [
            { text: "Update and maintain user profile information", icon: UserPen },
            { text: "Manage account details from a centralized interface", icon: FileText },
            { text: "Maintain accurate user information", icon: ShieldCheck },
        ],
    },
];


function ScreensCarousel() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const tabNavRef = useRef(null);

    const activeSlide = sliderData[activeIndex];
    const ActiveTabIcon = activeSlide.tabIcon;

    const panelId = `dashboard-tab-panel-${activeIndex}`;

    useEffect(() => {

        if (!dropdownOpen) {
            return undefined;
        }

        const closeOnOutsideClick = (event) => {

            if (
                tabNavRef.current
                && !tabNavRef.current.contains(event.target)
            ) {
                setDropdownOpen(false);
            }

        };

        document.addEventListener("mousedown", closeOnOutsideClick);

        return () => {
            document.removeEventListener("mousedown", closeOnOutsideClick);
        };

    }, [dropdownOpen]);

    const selectTab = (index) => {
        setActiveIndex(index);
        setDropdownOpen(false);
    };


    return (

        <section
            className="imageCarouselSection sec-top-bottom-spacing"
            id="modules"
        >

            <div className="container">

                <div className="headingGroup text-center">

                    <div className="subTitle">
                        <span>Core Modules</span>
                    </div>

                    <h2 className="title">
                    Everything You Need to{" "}

                        <span className="highlightTitle">
                        Manage
                        </span>{" "}

                        Identity and Access
                    </h2>

                    <p className="contentWrapper">
                    Explore A2ORU’s modules for managing organizations, users, applications, and security policies, each built to give administrators complete control.
                    </p>

                </div>


                <div className="dashboardTabsLayout">

                    <nav
                        className={`dashboardTabNav ${
                            dropdownOpen ? "is-open" : ""
                        }`}
                        ref={tabNavRef}
                    >

                        <button
                            type="button"
                            className="dashboardTabDropdownTrigger"
                            aria-expanded={dropdownOpen}
                            aria-controls="dashboard-tab-menu"
                            onClick={() => setDropdownOpen((open) => !open)}
                        >

                            <span className="dashboardTabIcon">

                                <ActiveTabIcon
                                    size={20}
                                    strokeWidth={2}
                                    aria-hidden
                                />

                            </span>

                            <span className="dashboardTabLabel">
                                {activeSlide.title}
                            </span>

                            <ChevronDown
                                className="dashboardTabDropdownChevron"
                                size={20}
                                strokeWidth={2}
                                aria-hidden
                            />

                        </button>


                        <ul
                            className="dashboardTabList"
                            id="dashboard-tab-menu"
                            role="tablist"
                            aria-label="Dashboard capabilities"
                        >

                        {sliderData.map((slide, index) => {

                            const isActive = index === activeIndex;
                            const tabId = `dashboard-tab-${index}`;
                            const TabIcon = slide.tabIcon;

                            return (

                                <li key={slide.title}>

                                    <button
                                        type="button"
                                        id={tabId}
                                        className={`dashboardTabBtn ${
                                            isActive ? "active" : ""
                                        }`}
                                        role="tab"
                                        aria-selected={isActive}
                                        aria-controls={panelId}
                                        tabIndex={isActive ? 0 : -1}
                                        onClick={() => selectTab(index)}
                                    >

                                        <span className="dashboardTabIcon">
                                            <TabIcon
                                                size={20}
                                                strokeWidth={2}
                                                aria-hidden
                                            />
                                        </span>

                                        <span className="dashboardTabLabel">
                                            {slide.title}
                                        </span>

                                        {isActive && (
                                            <ChevronRight
                                                className="dashboardTabChevron"
                                                size={20}
                                                strokeWidth={2}
                                                aria-hidden
                                            />
                                        )}

                                    </button>

                                </li>

                            );

                        })}

                        </ul>

                    </nav>


                    <div
                        className="dashboardTabPanel"
                        role="tabpanel"
                        id={panelId}
                        aria-labelledby={`dashboard-tab-${activeIndex}`}
                    >

                        <div className="dashboardContentCard">

                            <h3 className="dashboardContentTitle">
                                {activeSlide.title}
                            </h3>


                            <div className="dashboardContentBody">

                                <ul className="dashboardFeatureList">

                                    {activeSlide.points.map((point) => {

                                        const PointIcon = point.icon;

                                        return (

                                            <li
                                                className="dashboardFeatureRow"
                                                key={point.text}
                                            >

                                                <span className="dashboardFeatureIconWrap">

                                                    <PointIcon
                                                        size={20}
                                                        strokeWidth={2}
                                                        aria-hidden
                                                    />

                                                </span>

                                                <span className="dashboardFeatureText">
                                                    {point.text}
                                                </span>

                                                {/* <ChevronRight
                                                    className="dashboardFeatureChevron"
                                                    size={18}
                                                    strokeWidth={2}
                                                    aria-hidden
                                                /> */}

                                            </li>

                                        );

                                    })}

                                </ul>


                                <div
                                    className="dashboardContentDecor"
                                    aria-hidden="true"
                                >

                                    <img
                                        src={tabDecor}
                                        alt=""
                                        width="600"
                                        height="490"
                                        loading="lazy"
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}


export default ScreensCarousel;

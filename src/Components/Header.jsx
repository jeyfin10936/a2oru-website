import React, { useEffect, useState } from "react";
import Logo from '../Assets/a2oru-logo.webp';
import Button from "../Components/Common/Button";
import "../CSS/Header.css";
import {Menu, X} from "lucide-react";

const SCROLL_SPY_OFFSET = 150;

const menuItems = [

    {
        title: "Home",
        link: "#home",
        section: "home",
    },

    {
        title: "Benefits",
        link: "#ChooseUS",
        section: "ChooseUS",
    },

    {
        title: "Features",
        link: "#Features",
        section: "Features",
    },

    {
        title: "Modules",
        link: "#modules",
        section: "modules",
    },

    {
        title: "FAQ",
        link: "#faq",
        section: "faq",
    },

    {
        title: "Pricing",
        link: "#pricing",
        section: "pricing",
    },

    {
        title: "Contact",
        link: "#Contact",
        section: "Contact",
    },
];

const NAV_SECTION_IDS = new Set(
    menuItems.map((item) => item.section)
);

const getSectionDocumentTop = (section) => {

    const rect = section.getBoundingClientRect();

    return rect.top + window.scrollY;

};

function Header () {

    // sticky header
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    // header height calculation
    // const headerRef = useRef(null);

    // useEffect(() => {
    //     const updateHeaderHeight = () => {

    //         if (headerRef.current) {
    //             document.documentElement.style.setProperty(
    //                 "--header-height",
    //                 `${headerRef.current.offsetHeight}px`
    //             );
    //         }
    //     };
    //     updateHeaderHeight();
    // }, []);

    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {

        const getTrackedSections = () => (
            [...document.querySelectorAll("section[id]")].filter((section) => {
                const id = section.getAttribute("id");

                return id && NAV_SECTION_IDS.has(id);
            })
        );

        const updateActiveSection = () => {

            const sections = getTrackedSections();

            if (!sections.length) {
                return;
            }

            const scrollPosition = window.scrollY + SCROLL_SPY_OFFSET;

            let current = menuItems[0].section;

            sections.forEach((section) => {

                const id = section.getAttribute("id");

                if (
                    id
                    && scrollPosition >= getSectionDocumentTop(section)
                ) {
                    current = id;
                }

            });

            setActiveSection(current);

        };

        updateActiveSection();

        window.addEventListener("scroll", updateActiveSection, { passive: true });
        window.addEventListener("resize", updateActiveSection);

        const main = document.querySelector("main");

        const domObserver = main
            ? new MutationObserver(updateActiveSection)
            : null;

        if (main && domObserver) {
            domObserver.observe(main, { childList: true, subtree: true });
        }

        return () => {

            window.removeEventListener("scroll", updateActiveSection);
            window.removeEventListener("resize", updateActiveSection);
            domObserver?.disconnect();

        };

    }, []);

    // mobile menu
    const [mobileMenu, setMobileMenu] = useState(false);


    // Scroll Lock
    useEffect(() => {
        if (mobileMenu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };

    }, [mobileMenu]);


    return (
        <header className="Header">
            <div className="container">
                <div className={isSticky ? "headerWrapper active" : "headerWrapper"}>
                    <header>
                        <div className="site-logo">
                            <a
                                href="#home"
                                onClick={() => {
                                    setMobileMenu(false);
                                    setActiveSection("home");
                                }}
                            >
                                <img src={Logo} alt="Logo" />
                            </a>
                        </div>
                        <div className={`site-nav ${mobileMenu ? 'active' : ''}`}>
                            <nav>
                                <ul>
                                    {menuItems.map((item,index) => (
                                        <li key={index}>
                                            <a
                                                href={item.link}
                                                className={ activeSection === item.section ? "active" : "" }
                                                onClick={() => {
                                                    setMobileMenu(false);
                                                    setActiveSection(item.section);
                                                }}
                                                style={{"--delay":`${200 + (index * 50)}ms`}}
                                            >
                                                {item.title}
                                            </a>

                                        </li>
                                    ))}    

                                </ul>
                            </nav>

                            <button 
                                className="mobileMenuBtn"
                                aria-label="Open menu"
                                onClick={() => setMobileMenu(!mobileMenu)}
                            >
                                {mobileMenu ? <X /> : <Menu />}
                            </button>

                            <div
                                className={`menuOverlay ${
                                    mobileMenu ? "active" : ""
                                }`}
                                onClick={() =>
                                    setMobileMenu(false)
                                }
                            />

                        </div>
                        <div className="header-btn">
                            <Button link="#Contact" text="Request Demo" />
                        </div>
                    </header>
                </div>
            </div>
        </header>
    )
}

export default Header;
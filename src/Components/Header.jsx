import React, { useEffect, useState, useRef } from "react";
import Logo from '../Assets/A2ORU_Logo.png';
import Button from "../Components/Common/Button";
import Links from "../Components/Common/Link";
import "../CSS/Header.css";
import {Menu, X} from "lucide-react";

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
    const headerRef = useRef(null);

    useEffect(() => {
        const updateHeaderHeight = () => {

            if (headerRef.current) {
                document.documentElement.style.setProperty(
                    "--header-height",
                    `${headerRef.current.offsetHeight}px`
                );
            }
        };
        updateHeaderHeight();
    }, []);

    const [activeSection, setActiveSection] = useState("home");
    
    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const handleScroll = () => {
            const top = window.scrollY;

            /* Home Active at Top */
            if (top < 100) {
                setActiveSection("home");
                return;
            }

            sections.forEach((section) => {
                const offset = section.offsetTop - 150;
                const height = section.offsetHeight;
                const id = section.getAttribute("id");
                if (
                    top >= offset &&
                    top < offset + height
                ) {
                    setActiveSection(id);
                }
            });
        };

        window.addEventListener(
            "scroll",
            handleScroll
        );
        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };

    }, []);

    // mobile menu
    const [mobileMenu, setMobileMenu] = useState(false);


    // Menu list
    const menuItems = [

        {
            title: "Home",
            link: "#home",
            section: "home"
        },

        {
            title: "Benefits",
            link: "#ChooseUS",
            section: "ChooseUS"
        },

        {
            title: "Features",
            link: "#Features",
            section: "Features"
        },

        {
            title: "Pages",
            link: "#Pages",
            section: "Pages"
        },

        {
            title: "Faq",
            link: "#faq",
            section: "faq"
        },

        {
            title: "Pricing",
            link: "#pricing",
            section: "pricing"
        },

        {
            title: "Contact",
            link: "#Contact",
            section: "Contact"
        }
    ];

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
                <div ref={headerRef} className={isSticky ? "headerWrapper active" : "headerWrapper"}>
                    <header>
                        <div className="site-logo"><a href="#"><img src={Logo} alt="Logo" /></a></div>
                        <div className={`site-nav ${mobileMenu ? 'active' : ''}`}>
                            <nav>
                                <ul>
                                    {menuItems.map((item,index) => (
                                        <li key={index}>
                                            <a
                                                href={item.link}
                                                className={ activeSection === item.section ? "active" : "" }
                                                onClick={() => setMobileMenu( false ) }
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
                            <Button link={Links.demoURL} target="_blank" text="Explore Now" />
                        </div>
                    </header>
                </div>
            </div>
        </header>
    )
}

export default Header;
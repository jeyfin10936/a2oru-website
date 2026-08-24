import React, { useEffect, useState, useRef } from "react";

import Button from "../Components/Common/Button";
import Links from "../Components/Common/Link";

import "../CSS/MainBanner.css";


const CurveMask = () => (
    <svg width="1920" height="199" viewBox="0 0 1920 199" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1517.76 186.063C1403.9 175.357 1293.5 149.705 1147.97 85.0687C1091.14 59.4162 1000.32 22.4523 955.008 12.5549C909.696 2.65746 854.016 -3.2002 810.048 1.84951C790.464 4.07138 766.656 4.67734 713.856 16.7966C661.632 29.5219 602.112 50.3267 561.408 66.6878C482.112 98.8039 379.2 110.923 304.128 112.337C138.24 115.569 0 50.1247 0 50.1247V200H1920V129.91C1920 129.91 1821.12 169.096 1716.1 181.821C1611.84 193.94 1563.07 190.305 1517.76 186.063Z" fill="currentColor"/>
    </svg>
);

function MainBanner () {

    return (
        <section className="mainBanner banner" id="home">
            <div className="container">
  
                    <div className="content">
                          
                        <h1 className='text-center'>Enterprise Identity & Access <span className='highlightTitle'>Management</span> Made Simple</h1>
                        <p className='text-center'>A2ORU is a centralized Identity & Access Management platform that helps organizations securely manage users, applications, roles, and security policies from one unified system.</p>
                    </div>
                    <div className="btn-group">
                        <Button link="#ChooseUS" text="Explore Features" />
                        <Button link="#Contact" text="Request Demo" />
                    </div>

            </div>
            <CurveMask/>
        </section>
    )
}

export default MainBanner;
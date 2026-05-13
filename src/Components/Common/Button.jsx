import React from "react";
import { ChevronsRight } from "lucide-react";

function Button({
    text,
    link = "#",
    target = "_self",
    className = "",
    icon = true
}) {

    return (<>
        <a 
            href={link}
            target={target}
            className={`btn ${className}`}
        >
            <span className="btn-txt">{text}</span>
            <span className="btn-icon">
                {icon && (
                    <ChevronsRight className="btnIcon" />
                )}
            </span>           
        </a>
        </>
    );
}

export default Button;
import * as React from "react";

export interface ILinkProps {
    active?: boolean;
    children?: any;
    onClick?: () => void;
}

const Link = ({active, children, onClick}: ILinkProps)  => {
    if (active) {
        return <span>{children}</span>
    }

    return (
        <a
            href=""
            onClick={click}
        >
            {children}
        </a>
    );

    function click(e: any) {
        e.preventDefault();
        onClick!();
    }
};

export default Link;

import React from "react";
import Navbar1 from "./Navbar1";

export const Layout = (props) => {
    return (
        <>
            <Navbar1 />
            {props.children}
        </>
    );
};

export default Layout;

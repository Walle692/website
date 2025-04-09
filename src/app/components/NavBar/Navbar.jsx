import React from "react";
import {nav, navbar, bars, navmenu, navlink, navbtn, navbtnlink, Nav} from "./navbarElements.js";

const Navbar = () => {
    return (
        <>
            <nav>
                <bars />

                <navmenu>
                    <navlink to="/">Home</navlink>
                    <navlink to="/services">Services</navlink>
                    <navlink to="/contact">Contact</navlink>
                </navmenu>
            </nav>
        </>
    );
};

export default Navbar;
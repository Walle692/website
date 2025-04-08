import React from "react";
import {nav, navbar, bars, navmenu, navlink, navbtn, navbtnlink} from "./navbarElements.js";

const Navbar = () => {
    return (
        <>
            <nav>
                <bars />

                <navmenu>
                    <navlink href="/">Home</navlink>
                    <navlink href="/services">Services</navlink>
                    <navlink href="/contact">Contact</navlink>
                </navmenu>
            </nav>
        </>
    );
};

export default Navbar;
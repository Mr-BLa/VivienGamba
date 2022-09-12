
/*
*           HEADER 
*/

import React from "react"
import Headerlogo from "../logos/VivienGambaLogoMinified.svg" 
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <Link to="/">
            <header id="headerContainer">
                <nav id="navBar">
                    <img 
                        src={Headerlogo}
                        className="header--logo"
                        alt="Logo Vivien Gamba"/>
                </nav>
            </header>
        </Link>
    )
}


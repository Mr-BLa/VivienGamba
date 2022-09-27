
/*
*           HEADER 
*/

import React from "react"
import Menulogo from "../logos/bars-solid.svg"
import MenulogoVert from "../logos/bars-solid green.svg"
import { Link } from "react-router-dom"

export default function Header() {

    /** DropDown **/
    /* Quand l'user clique sur le bouton, toggle entre: "hide" et "show" le dropdown*/
    function dropDown() {
        document.getElementById("myDropdown").classList.toggle("show");
        // document.getElementsByClassName("header--menulogo").style.display="none";
    }

    // Ferme le menu dropdown, si l'user clique à l'éxtérieur de celui-ci
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            let dropdowns = document.getElementsByClassName("dropdown-content");
            let i;
            for (i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    return (
        <header id="headerContainer">
            <Link to="/" className="link--home">
                <nav id="navigation">
                    <div className="site-name-logo">
                        <h1 className="site-name" > Vivien Gamba </h1>
                        
                    </div>
                    <div className="dropdown">
                        {/* <img
                            src={Menulogo}
                            className="header--menulogo dropbtn"
                            alt="icone menu"
                            /> */}
                        <img
                            src={MenulogoVert}
                            className="header--menulogoVert dropbtn"
                            alt="icone menu"
                            onClick={dropDown}
                            />
                        <div id="myDropdown" className="dropdown-content">
                            <Link to="/apropos" className="link--menu">À propos</Link>
                            <Link to="/sculptures" className="link--menu">Sculptures</Link>
                                <Link to="/sculptures/saintElient" className="link--menu link--sous-menu">Saint Elient</Link>
                                <Link to="/sculptures/saintPer" className="link--menu link--sous-menu">Saint Per</Link>
                                <Link to="/sculptures/saintGuillaumePinchon" className="link--menu link--sous-menu">Saint Guillaume Pinchon</Link>
                                <Link to="/sculptures/saintTenenan" className="link--menu link--sous-menu">Saint Tenenan</Link>
                                <Link to="/sculptures/saintElouan" className="link--menu link--sous-menu">Saint Elouan</Link>
                            <Link to="/contact" className="link--menu">Contact</Link>
                        </div>
                    </div>
                </nav>
            </Link>
        </header>
    )
}


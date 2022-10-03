
/*
*           HEADER 
*/

import React from "react"
// import Menulogo from "../logos/bars-solid.svg"
import MenulogoVert from "../logos/bars-solid green.svg"
import { Link } from "react-router-dom"

export default function Header() {

    /** DropDown **/
    /* Quand l'user clique sur le bouton, toggle entre: "hide" et "show" le dropdown*/
    function dropDown() {
        document.getElementById("myDropdown").classList.toggle("show");

        /* les delays sur les link du dropdown */
        document.getElementById("dropdownLink1").classList.toggle("delay1")
        document.getElementById("dropdownLink2").classList.toggle("delay2")
        document.getElementById("dropdownLink3").classList.toggle("delay3")
        document.getElementById("dropdownLink4").classList.toggle("delay4")
        document.getElementById("dropdownLink5").classList.toggle("delay5")
        document.getElementById("dropdownLink6").classList.toggle("delay6")
        document.getElementById("dropdownLink7").classList.toggle("delay7")
        document.getElementById("dropdownLink8").classList.toggle("delay8")
    }

    // Ferme le menu dropdown, si l'user clique à l'éxtérieur de celui-ci
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            let dropdowns = document.getElementsByClassName("dropdown-content");
            let links = document.getElementsByClassName("link--menu");
            let i;

            /* Suppression du dropdown */
            for (i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];

                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }

            /* Suppression des delay */
            for (i = 0; i < links.length; i++) {
                let openLinks = links[i]

                if (openLinks.classList.contains('delay1')) {
                    openLinks.classList.remove('delay1');
                }
                if (openLinks.classList.contains('delay2')) {
                    openLinks.classList.remove('delay2');
                }
                if (openLinks.classList.contains('delay3')) {
                    openLinks.classList.remove('delay3');
                }
                if (openLinks.classList.contains('delay4')) {
                    openLinks.classList.remove('delay4');
                }
                if (openLinks.classList.contains('delay5')) {
                    openLinks.classList.remove('delay5');
                }
                if (openLinks.classList.contains('delay6')) {
                    openLinks.classList.remove('delay6');
                }
                if (openLinks.classList.contains('delay7')) {
                    openLinks.classList.remove('delay7');
                }
                if (openLinks.classList.contains('delay8')) {
                    openLinks.classList.remove('delay8');
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
                            <Link to="/apropos" id="dropdownLink1" className="link--menu ">À propos</Link>
                            <Link to="/sculptures" id="dropdownLink2" className="link--menu ">Sculptures</Link>
                                <Link to="/sculptures/saintElient" id="dropdownLink3" className="link--menu link--sous-menu ">Saint Elient</Link>
                                <Link to="/sculptures/saintPer" id="dropdownLink4" className="link--menu link--sous-menu ">Saint Per</Link>
                                <Link to="/sculptures/saintGuillaumePinchon" id="dropdownLink5" className="link--menu link--sous-menu ">Saint Guillaume Pinchon</Link>
                                <Link to="/sculptures/saintTenenan" id="dropdownLink6" className="link--menu link--sous-menu ">Saint Tenenan</Link>
                                <Link to="/sculptures/saintElouan" id="dropdownLink7" className="link--menu link--sous-menu ">Saint Elouan</Link>
                            <Link to="/contact" id="dropdownLink8" className="link--menu ">Contact</Link>
                        </div>
                    </div>
                </nav>
            </Link>
        </header>
    )
}



/*
*           HEADER 
*/

import React from "react"
import VivienPhoto from "../images/vivien-gamba-home.webp" 

export default function Home() {
    return (
        <main className="home--main">
            <img 
                src={VivienPhoto}
                className="home--photo"
                alt="Portrait Vivien Gamba"/>
        </main>
    )
}
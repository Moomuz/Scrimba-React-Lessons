/**
Challenge: Complete the Navbar to match the design

Hint: use the Figma file for the most accurate peek at the design
(colors, sizes, fonts, etc.)
*/

import React from "react"

export default function Navbar() {
    return (
        <nav>
            <img className="nav-logo-img" src="../images/react-icon-small.png" alt="React Logo" />
            <h3 className="nav-title">ReactFacts</h3>
            <h4 className="nav-subtitle">React Course - Project 1</h4>
        </nav>
    )
}
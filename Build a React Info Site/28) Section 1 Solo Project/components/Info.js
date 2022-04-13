import React from "react"

export default function Info() {
    return (
        <div className="info">
            <img className="info--profile-picture" src="https://i.pinimg.com/474x/c2/be/c8/c2bec87561f321594a2812ba1da4f8d2.jpg" alt="Profile Picture" />
            
            <h1 className="info--name">Zero Two</h1>
            <h2 className="info--job-title">Franxx Pilot</h2>
            <p className="info--website">zerotwo.website</p>
            
            <div className="info--links">
                <p className="info--email">Email</p>
                <p className="info--linkedin">LinkedIn</p>
            </div>
        </div>
    )
}
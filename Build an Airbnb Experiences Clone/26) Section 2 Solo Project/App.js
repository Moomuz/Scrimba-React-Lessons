import React from "react"
import Navbar from "./components/Navbar"
import Destination from "./components/Destination"
import data from "./data"

export default function App() {
    const destinations = data.map(item => {
        return (
            <Destination 
                key={item.id}
                {...item}
            />
        )
    })
    
    return (
        <div>
            <Navbar />
            {destinations}
        </div>
    )
}
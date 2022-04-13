import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function App() {
            // <Hero />
    const cardElements = data.map(cardData => {
        return (
            <Card
                img={cardData.coverImg}
                rating={cardData.stats.rating}
                reviewCount={cardData.stats.reviewCount}
                location={cardData.location}
                title={cardData.title}
                price={cardData.price}
            />
        )
    })
    return (
        <div>
            <Navbar />
            {cardElements}
        </div>
    )
}
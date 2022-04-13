/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

import React from "react"
import ReactDOM from "react-dom"

function Page() {
    return (
        <div>
            <img src="./react-logo.png" alt="React logo" width="40px"/>
            <h1>Why I am excited to learn about React</h1>
            <ul>
                <li>It will get me one step closer to become the frontend developer I want to be</li>
                <li>I want to learn how to make websites more dynamic</li>
                <li>It will help add essential skillsets to land me a nice career</li>
            </ul>
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
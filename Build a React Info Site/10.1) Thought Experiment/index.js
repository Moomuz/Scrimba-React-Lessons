import React from "react"

/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

const elements = (
    <div>
        <h1>This is the title.</h1>
        <h3>This is the subtitle.</h3>
        <ul>
            <li>Thing 1</li>
            <li>Thing 2</li>
            <li>Thing 3</li>
        </ul>
    </div>
)

// prints "[object Object]"
//document.getElementById("root").append(elements)

// prints actual javascript object
document.getElementById("root").append(JSON.stringify(elements))

// guess = there will be an error because of mismatch in object types (vanilla javascript deals with html elements whereas JSX deals with javascript objects)

// actual run = code DOES run but outputs string representation of javascript object instead of expected html elements
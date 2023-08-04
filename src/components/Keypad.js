// Code Keypad Component Here
import React from "react";


function Keypad() {
    function handleChange() {
        console.log("Entering password...")
    }
    return (
        <input type="password" onChange={handleChange} />
    )
}

export default Keypad;

//In this lab we are adding the function keypad 
// Afterwards we are adding a function to handle the click or event listener which in this case is the change event 
//Then it wants us to add an input where the onChange will ne entered. We will also be adding the <input type='password'/> and adding in the onChange into that field 
//Then we add a console log with the given text

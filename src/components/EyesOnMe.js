// Code EyesOnMe Component Here
import React from "react"

function EyesOnMe() {
    function handleFocus() {
        console.log('Good!')
    }
    function handleBlur() {
        console.log('Hey! Eyes on me!')
    }
    return (
        <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>
    )
}

export default EyesOnMe

//We first start with the eyesonme function and then add two handle functions
//One for the blur and the other for the focus whic we will name handleBlur and handleFocus
//Each one has a console.log accordingly
// What we return is the button witht eh on"handle" to which is blur and focus with the given text in the button tag
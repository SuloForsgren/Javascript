'use strict'



function concat(array) {
    
    for (let word of array) {
        string += word
    }
    return string
}
let string = []
const array = ['Apple', 'Banana', 'Hello', 'World']
concat(array)

document.getElementById('text').innerHTML = string
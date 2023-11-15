'use strict'



function concat(array) {

	let string = ""
    	for (let word of array) {
        	string += word
    	}
    	return string
}

const array = ['Apple', 'Banana', 'Hello', 'World']
const result = concat(array)

document.getElementById('text').innerHTML = result

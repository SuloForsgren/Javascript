'use strict'

const button = document.querySelector('#start')
let result = document.querySelector('#result')

button.addEventListener("click", function(evt) {
    let string = document.querySelector('#calculation').value
    
    if (string.includes("-")) {
        let split = string.split('-')
        result.innerText = parseInt(split[0]) - parseInt(split[1])
    }
    else if (string.includes("+")) {
        let split = string.split('+')
        result.innerText = parseInt(split[0]) + parseInt(split[1])
    }
    else if (string.includes("*")) {
        let split = string.split('*')
        result.innerText = parseInt(split[0]) + parseInt(split[1])
    }
    else if (string.includes("/")) {
        let split = string.split('/')
        result.innerText = parseInt(split[0]) + parseInt(split[1])
    }
})
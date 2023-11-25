'use strict'
const button = document.querySelector('#start')
let result = document.querySelector('#result')

button.addEventListener("click", function(evt) {
    const option = document.querySelector('#operation').value
    const num1 = parseInt(document.querySelector('#num1').value)
    const num2 = parseInt(document.querySelector('#num2').value)

    switch (option) {
        case "add":
            result.innerText = num1 + num2
            break;
        case "sub":
            result.innerText = num1 - num2
            break;
        case "multi":
            result.innerText = num1 * num2
            break;
        case "div":
            result.innerText = num1 / num2
            break;
    }
})


'use strict'
const form = document.querySelector('#source')
const result = document.querySelector('#target')


form.addEventListener('submit', function(button) {
    button.preventDefault()
    const fname = document.querySelector('input[name=firstname]').value
    const lname = document.querySelector('input[name=lastname]').value

    result.innerText = "Your name is " + fname + " " + lname
    
})
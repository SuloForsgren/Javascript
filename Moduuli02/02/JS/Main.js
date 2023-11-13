'use strict'

const part = parseInt(prompt('Participants'), 10)
let participants = []

for (let i = 0; i < part; i++) {
    let name = prompt('What is your name?')
    participants.push(name)
}

for (let name of participants.sort())
document.getElementById('order').innerHTML += '<li>'+name+'</li>'
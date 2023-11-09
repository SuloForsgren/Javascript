'use strict'
let name = prompt('Your name: ')
let room
do {
    room = Math.floor(Math.random() * 5);
  } while (room === 0);

console.log(room)

switch (room) {
    case 1:
        document.getElementById("text").innerHTML = name + ', you are Gryffindor'
        break
    case 2:
        document.getElementById("text").innerHTML = name + ', you are Slytherin'
        break
    case 3:
        document.getElementById("text").innerHTML = name + ', you are Hufflepuff'
        break
    case 4:
        document.getElementById("text").innerHTML = name + ', you are Ravenclaw'
        break
    default:
        console.log('Invalid number')
}
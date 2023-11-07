'use strict'
let name = prompt('Your name: ')
let room
do {
    room = Math.floor(Math.random() * 5);
  } while (room === 0);

console.log(room)

switch (room) {
    case 1:
        console.log('Gryffindor')
        break
    case 2:
        console.log('Slytherin')
        break
    case 3:
        console.log('Hufflepuff')
        break
    case 4:
        console.log('Ravenclaw')
        break
    default:
        console.log('Invalid number')
}
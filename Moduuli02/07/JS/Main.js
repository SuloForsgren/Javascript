'use strict'

function roll(max) {
    return Math.floor(Math.random() * max) +1;
}

let found = false;
const max = parseInt(prompt("Dice Sides"), 10)


while(found == false) {
    let points = roll(max);
    if(points == max) {
        found = true;
    }
    document.getElementById("text").innerHTML += `<li>${points}</li>`;
}
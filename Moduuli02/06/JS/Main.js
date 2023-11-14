'use strict'

function roll() {
    return Math.floor(Math.random() * 6) +1;
}

let found = false;

while(found == false) {
    let points = roll();
    if(points == 6) {
        found = true;
    }
    document.getElementById("text").innerHTML += `<li>${points}</li>`;
}
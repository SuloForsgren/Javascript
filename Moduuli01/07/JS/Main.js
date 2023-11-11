'use strict'
let rolls = prompt('How many times you want to roll a dice?')
let sum = 0

for (let i = 0; i < rolls; i++) {
    do {
        sum += Math.floor(Math.random()*7)
    } while(sum == 0)
}

console.log(sum)
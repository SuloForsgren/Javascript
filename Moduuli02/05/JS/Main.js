'use strict'

let numbers = []
let number = 0
do {
        number = parseInt(prompt('Number here: '), 10)
        numbers.push(number)
} while(number != 0)

numbers.pop(0)

for (let index of numbers.sort((a,b) => a-b).reverse()){
    console.log(index)
}
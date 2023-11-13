'use strict'

let numbers = []
let same_number = false
do {
        let number = parseInt(prompt('Number here: '), 10)
        if (numbers.includes(number)) {
            same_number = true
        }
        else {
        numbers.push(number)
        }
} while(same_number == false)

for (let index of numbers.sort((a,b) => a-b).reverse()){
    console.log(index)
}
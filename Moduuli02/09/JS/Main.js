'use strict'



function even(array) {
    let fixed = []
    for (let number of array) {
        if (number % 2 === 0) {
            fixed.push(number)
        }
    }
    return fixed
}
const array = [2,4,7,2]
even(array)

console.log('Original Array--> ' + array)
console.log('Fixed Array --> ' + fixed)

'use strict'

let n1 = prompt('First Number: ')
let n2 = prompt('Second Number: ')
let n3 = prompt('Third Number: ')
let n4 = prompt('Fourth Number: ')
let n5 = prompt('Fifth Number: ')

const array = [n1,n2,n3,n4,n5]

for (let index = 4; index != -1; index--) {
    console.log(array[index])
}
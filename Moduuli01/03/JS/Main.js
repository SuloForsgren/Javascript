'use strict'
let luku1 = prompt('Luku1: ');
let luku2 = prompt('Luku2: ');
let luku3 = prompt('Luku3: ');
luku1 = parseInt(luku1)
luku2 = parseInt(luku2)
luku3 = parseInt(luku3)

let sum = luku1 + luku2 + luku3
let product = luku1 * luku2* luku3
let avg = (luku1 + luku2 + luku3) / 3

console.log(sum)

document.getElementById("sum").innerHTML = "Sum: " + sum;
document.getElementById("prd").innerHTML = "Product: " + product;
document.getElementById("avg").innerHTML = "Average: " + avg;
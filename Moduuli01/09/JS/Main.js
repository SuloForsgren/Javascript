'use strict'

let result = prompt('Give me a number:')
result = parseInt(result)
let bool = false

for (let index = 2; index < result; index++) {
    if (result % index === 0) {
        bool = true;
        break;
    }
}

if (bool) {
    document.getElementById('text').innerHTML = 'Number ' + result + ' Is not a prime number'
} 

else {
    document.getElementById('text').innerHTML = 'Number ' + result + ' Is a prime number'
}
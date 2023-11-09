'use strict'
let confirmation = confirm('Should I calculate the square root?')

if (confirmation == true) {
    let number = prompt('Give me a number please: ')
    
    if (number >= 0) {
        number = Math.sqrt(number)
        document.getElementById('Text').innerHTML = 'Square root: ' + number
    }
    
    else {
        document.getElementById('Text').innerHTML = 'The square root of a negative number is not defined'
    }
}

else {
    document.getElementById("Text").innerHTML = 'The square root is not calculated.'
}
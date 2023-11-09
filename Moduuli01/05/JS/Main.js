'use strict'
let year = prompt('Enter year: ')

if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
    document.getElementById('Text').innerHTML = 'Vuosi on karkausvuosi'
}
else {
    document.getElementById('Text').innerHTML = 'Vuosi ei ole karkausvuosi'
}
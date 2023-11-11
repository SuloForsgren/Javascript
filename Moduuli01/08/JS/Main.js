'use strict'

const start = prompt('Start Year')
const end = prompt('End Year')


for (let index = start; index <= end; index++) {
    if (index % 4 == 0 || (index % 100 == 0 && index % 400 == 0)) {
        document.getElementById('list').innerHTML += '<li>'+index+'</li>'
    }
}


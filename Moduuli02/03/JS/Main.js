'use strict'

let dnames = []

for (let i = 0; i < 6; i++){
    let name = prompt('Dog name')
    dnames.push(name)
}

for (let dname of dnames.reverse())
document.getElementById('order').innerHTML += '<li>'+dname+'</li>'
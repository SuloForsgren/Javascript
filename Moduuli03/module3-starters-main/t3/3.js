'use strict';
const element = document.getElementById('target')

const names = ['John', 'Paul', 'Jones'];


for (let word of names) {
    const listElement = document.createElement('li')
    
    const listText = document.createTextNode(word)
    listElement.appendChild(listText)

    element.innerHTML= listElement
}
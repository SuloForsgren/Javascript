'use strict'

const element = document.getElementById('target')
const names = ['John', 'Paul', 'Jones'];


for (let word of names) {
    const listElement = document.createElement('li')
    const listText = document.createTextNode(word)
    listElement.append(listText)

    element.innerHTML += listElement
}
'use strict'

const element = document.getElementById('target')

const array = ["first", "second", "third"]


for (let word of array) {
    const listElement = document.createElement('li')
    
    const listText = document.createTextNode(word + " item")
    listElement.appendChild(listText)
    
    element.appendChild(listElement)
}
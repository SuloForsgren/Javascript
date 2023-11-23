'use strict'

const element = document.getElementById('target')

const array = ["first", "second", "third"]


for (let word of array) {
    const listElement = document.createElement('li')
    
    const listText = document.createTextNode(word + " item")
    listElement.appendChild(listText)
    
    if (word == "second") {
        document.querySelector('#target').classList.add("my-item")
    }

    element.appendChild(listElement)
}
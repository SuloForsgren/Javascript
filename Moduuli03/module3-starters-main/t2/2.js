'use strict'

const element = document.getElementById('target')

const array = ["First", "Second", "Third"]


for (let word of array) {
    const listElement = document.createElement('li')
    
    const listText = document.createTextNode(word + " item")
    listElement.appendChild(listText)
    
    if (word == "second") {
        listElement.classList.add("my-item");
    }

    element.append(listElement)
}
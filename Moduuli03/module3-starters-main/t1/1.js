'use strict'

const ul = document.querySelector('#target')

const item1 = '<li>First item</li>'
const item2 = '<li>Second item</li>'
const item3 = '<li>Third item</li>'

ul.innerHTML = item1 + item2 + item3
document.querySelector("#target").classList.add("my-list")
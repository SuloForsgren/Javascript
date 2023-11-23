'use strict'

const ul = document.getElementById('target')

const item1 = '<li>"first item"</li>'
const item2 = '<li>"Second item"</li>'
const item3 = '<li>"Third item"</li>'

ul.innerHTML = item1 + item2 + item3
ul.classList.add("my-list")
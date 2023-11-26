'use strict'

const form = document.querySelector('form')
//console.log(form)

form.addEventListener('submit', async function(evt) {
    evt.preventDefault()
    const input = document.querySelector('input[id=query]').value

    try {
        const response = await fetch("https://api.tvmaze.com/search/shows?q=$"+input)
        const json = await response.json()
        console.log(json)
    }
    catch (error) {
        console.log(error)
    }
})


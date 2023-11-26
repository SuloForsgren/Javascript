'use strict'

const form = document.querySelector('form')

form.addEventListener('submit', async function(evt) {
    evt.preventDefault()
    const input = document.querySelector('input[id=query]').value

    const div = document.querySelector('#results')
    div.innerHTML = ""

    try {
        const response = await fetch("https://api.tvmaze.com/search/shows?q=$"+input)
        const data = await response.json()
        console.log(data[0])
        
        for (let show of data) {
            const name = show.show.name
            const url = show.show.url
            const medium = show.show.image?.medium
            const summary = show.show.summary
            

            
            const article = div.appendChild(document.createElement("article"))

            const h2 = article.appendChild(document.createElement("h2"))
            h2.textContent = name
            
            const a = article.appendChild(document.createElement("a"))
            a.textContent = url
            a.href = url
            a.target = "_blank"

            const img = article.appendChild(document.createElement("img"))
            img.src = medium
            img.alt = "fix this"
        
            const sum = article.appendChild(document.createElement("div"))
            sum.innerHTML = summary
        }
    }
    catch (error) {
        console.log(error)
    }
})


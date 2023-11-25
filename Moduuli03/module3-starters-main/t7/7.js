'use strict'
const img = document.querySelector("#target")
const trigger = document.querySelector("#trigger")

trigger.addEventListener("mouseover", function(hover) {
    img.src = "img/picB.jpg"
})

trigger.addEventListener("mouseout", function(out) {
    img.src = "img/picA.jpg"
})
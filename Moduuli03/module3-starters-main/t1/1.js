"use strict";

const target = document.getElementById("target");
const html =
`<li>First item</li>
<li>Second item</li>
<li>Third item</li>`;

target.innerHTML += html;
document.getElementById("target").classList.add("my-list");
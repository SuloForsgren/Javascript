'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const element = document.getElementById('target')

for (let student of students) {
  let option = document.createElement("option")
  let text = document.createTextNode(student.name)

  option.appendChild(text)
  option.value = student.id

  element.append(option)
}

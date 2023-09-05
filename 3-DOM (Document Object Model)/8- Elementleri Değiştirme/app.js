// REPLACE
// <h5 class="card-title" id="tasks-title">Todolar</h5>

const cardbody = document.querySelectorAll(".card-body")[1]

const newElement = document.createElement("h3")

newElement.className = "card-title"
newElement.id = "tasks-title"
newElement.appendChild(document.createTextNode("Todo Listimiz"))
cardbody.appendChild(newElement)


// Eski Element

const oldElement = document.querySelector("#tasks-title")
cardbody.replaceChild(newElement, oldElement)
console.log(newElement)
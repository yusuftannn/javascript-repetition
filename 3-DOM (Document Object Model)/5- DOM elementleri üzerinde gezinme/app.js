let value

const todoList = document.querySelector(".list-group")
const todo = document.querySelector(".list-group-item:nth-child(2)")
const cardrow = document.querySelector(".card.row")

value = todoList
value = todo
value = cardrow

// Child Nodes - Text dahil alıyor

value = todoList.childNodes;
value = todoList.childNodes[0];

// Children - element
value = todoList.children
value = todoList.children[todoList.children.length - 1];
value = todoList.children[2].textContent = "Değişti"

value = cardrow;
value = cardrow.children
value = cardrow.children[2].children[1].textContent = "Burası da değişti"

value = todoList
value = todoList.children[0]
value = todoList.firstElementChild
value = todoList.lastElementChild
value = todoList.children.length
value = todoList.childElementCount

value = cardrow
value = cardrow.parentElement // container
value = cardrow.parentElement.parentElement

// element kardeşleri

value = todo
value = todo.nextElementSibling
value = todo.previousElementSibling
value = todo.nextElementSibling.nextElementSibling



console.log(value)
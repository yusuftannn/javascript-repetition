const form = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo")
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0]
const secondCardBody = document.querySelectorAll(".card-body")[1]
const filter = document.querySelector("#filter")
const clearButton = document.querySelector("#clear-todos")

eventListeners();

function eventListeners() {  // Tüm event listenerlar
    form.addEventListener("submit", addTodo)
    document.addEventListener("DOMContentLoaded", loadAllTodoToUI)
    secondCardBody.addEventListener("click", deleteTodo);    // Todoları silmek için
    filter.addEventListener("keyup", filterTodos)    // filtreleme 
    clearButton.addEventListener("click", clearAllTodos)
}
function clearAllTodos(e) {   // tüm todoları temizleme
    if (confirm("Tümünü silmek istediğinize emin misiniz ?")) {
        // Arayüzden todoları temizleme
        // todoList.innerHTML = "";    // Yavaşlatan yöntem
        while (todoList.firstElementChild != null) {
            todoList.removeChild(todoList.firstElementChild)
        }
        localStorage.removeItem("todos")
    }
}
function filterTodos(e) {    // filtreleme
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item")

    listItems.forEach(function (listItem) {
        const text = listItem.textContent.toLowerCase();
        if (text.indexOf(filterValue) === -1) {
            listItem.setAttribute("style", "display : none !important")
        } else {
            listItem.setAttribute("style", "display : block")

        }
    })
}

function deleteTodo(e) {    // Todoları silme fonksiyonu
    if (e.target.className === "fa fa-remove") {    // Okunuşu: Tıkladığımızın className i eşitse "fa fa-remove" classına
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent) // Storage den silmek için

        showAlert("success", "Todo Başarıyla Silindi.")
    }
}
// Storage dan Silmek için START
function deleteTodoFromStorage(deletetodo) {
    let todos = getTodosFromStorage();
    todos.forEach(function (todo, index) {
        if (todo === deletetodo) {
            todos.splice(index, 1) // Arrayden değeri silebiliriz.
        }
    })
    localStorage.setItem("todos", JSON.stringify(todos))
}
// Storage dan Silmek için END
function loadAllTodoToUI() {     // Sayfayı yenilediğimizde eklenen todolar kalması için
    let todos = getTodosFromStorage();

    todos.forEach(function (todo) {
        addTodoToUI(todo)
    })
}
function addTodo(e) {
    const newTodo = todoInput.value.trim(); // trim = inputa yazılan yazının başına veya sonundaki yazıyı yok eder.

    if (newTodo === "") {
        // <div class="alert alert-danger" role="alert">
        //     A simple danger alert—check it out!
        // </div>
        showAlert("danger", "Lütfen bir todo girin..."); // hata alerti 
    } else {
        addTodoToUI(newTodo)
        addTodoToStorage(newTodo);
        showAlert("success", "Todo başarıyla eklendi.."); // eklendi alerti 
    }

    e.preventDefault();
}
// STORAGE Fonksiyonu  HER YERDE KULLANMAK İÇİN
function getTodosFromStorage() { // Storageden Todoları Alma
    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    return todos;
}

function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage()
    todos.push(newTodo)
    localStorage.setItem("todos", JSON.stringify(todos))
}
function showAlert(type, message) {
    const alert = document.createElement("div")
    alert.className = `alert alert-${type}`;
    alert.textContent = message;

    firstCardBody.appendChild(alert)    // boş todo eklemeye çalışıldığında alert çıkar.
    // setTimeout
    setTimeout(function () {            // alert gösterilip 1sn sonra yok oluyor.
        alert.remove();
    }, 1000)
}
function addTodoToUI(newTodo) { // String değerini list item olarak UI'ya ekleyecek
    // <li class="list-group-item d-flex justify-content-between">
    //     Todo 1
    //     <a href="#" class="delete-item">
    //         <i class="fa fa-remove"></i>
    //     </a>

    // </li>
    // List Item Oluşturma
    const listItem = document.createElement("li")
    // Link Oluşturma
    const link = document.createElement("a")
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class='fa fa-remove'></i>"

    listItem.className = "list-group-item d-flex justify-content-between"
    // Text Node Ekleme
    listItem.appendChild(document.createTextNode(newTodo))
    listItem.appendChild(link);

    // Todo List'e List Item'ı ekleme
    todoList.appendChild(listItem);
    todoInput.value = "";       // inputa istenen yazıldıktan sonra inputun boş olması için
    console.log(listItem)
}
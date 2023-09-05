// Local Storage
// Depoladığımız değerleri biz silmediğimiz sürece kalır. Tarayıcıyı kapatsak bile kalır.

// Session Storage
// Oturumumuz açık kaldığı sürece depoladığımız veriler kalır.

// SetItem
// localStorage.setItem("takım1","fenerbahce")
// localStorage.setItem("takım2","fenerbahcee")
// localStorage.setItem("takım3",50)

// Get Item
// const value = localStorage.getItem("takım3")
// console.log(value)
// console.log(typeof value)

// Clear Local Storage
// localStorage.clear()


// localStorage.setItem("takım1","fenerbahce")
// localStorage.setItem("takım2","fenerbahcee")
// localStorage.setItem("takım3",50)

// console.log(localStorage.getItem("sport"))

// if (localStorage.getItem("takım1") === null) {
//     console.log("Sorguladığınız veri bulunmamaktadır.")
// }else{
//     console.log("Sorguladığınız veri bulunuyor.")
// }

// Local Storage - Array Yazma START

// const todos = ["Todo 1", "Todo 2", "Todo 3"];

// localStorage.setItem("todos", JSON.stringify(todos))

// const value = JSON.parse(localStorage.getItem("todos"));
// console.log(value);

// Local Storage - Array Yazma END

const form = document.getElementById("todo-form")
const todoInput = document.getElementById("todo")

form.addEventListener("submit",addTodo)
function addTodo(e){
    const value = todoInput.value

    let todos;
    if(localStorage.getItem("todos")=== null){
        todos=[];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(value)

    localStorage.setItem("todos",JSON.stringify(todos));
    e.preventDefault();
}


const filterInput = document.getElementById("filter")
const todoForm = document.getElementById("todo-form")   // 3.kısım
// 1- yol
// filterInput.onfocus = function () {
//     console.log("naber")
// }


// 2- yol
// filterInput.addEventListener("focus", function (e) {
//     console.log(e)
//     console.log(e.type)
//     console.log(e.target)
//     console.log(e.target.className)
//     // console.log("naber")
// })



// 3
todoForm.addEventListener("submit",submitForm)

function submitForm(e){
    console.log("Submit Eventi")



    e.preventDefault();     // bu yazılmadığında "submit eventi" yazısı consoleda çok kısa gösterilip gizleniyor.
}

// console.log(filterInput)
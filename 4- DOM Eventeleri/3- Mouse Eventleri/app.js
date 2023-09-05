const cardBody = document.querySelectorAll(".card-body")[1]

const title = document.querySelector("#tasks-title")

// Click event

// title.addEventListener("click",run)

// function run (e){
//     console.log(e.type)
// }

// Double Click         ÇİFT TIKLAYINCA

// title.addEventListener("dblclick", run)

// function run (e) {
//     console.log(e.type)
// }

// Mouse Down
// title.addEventListener("mousedown",run)

// function run (e){
//     console.log(e.type)
// }

// Mouse Up         Basıp bırakıldığında ekrana yazar
// title.addEventListener("mouseup", run)
// function run(e) {
//     console.log(e.type)
// }

// Mouse Over       Üzerine gelindiğinde ekrana yazar
// title.addEventListener("mouseover",run)

// function run (e){
//     console.log(e.type)
// }

// Mouse Out       Mouse ile üzerine gelip çıkıldığında ekrana yazar
// title.addEventListener("mouseout", run)

// function run(e) {
//     console.log(e.type)
// }

// cardbody e girdiğinde ve her bir element için ekrana yazar
// cardBody.addEventListener("mouseover", run)
// cardBody.addEventListener("mouseout", run)
// function run(e) {
//     console.log(e.type)
// }

// Mouse Enter ve Mouse Leave       // yalnızca içeri girildiğinde ve çıkıldığında yazıyor
cardBody.addEventListener("mouseenter", run)
cardBody.addEventListener("mouseleave", run)
function run(e) {
    console.log(e.type)
}
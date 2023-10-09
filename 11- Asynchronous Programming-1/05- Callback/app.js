// Callback Functions

// ÖRNEK 1 
// const langs = ["Python", "Javascript", "C++"]

// langs.forEach(function (lang) {
//     console.log(lang)
// })

// document.getElementById("button").addEventListener("click",function(){
//     console.log("tıkla")
// })


// ÖRNEK 2
// Ne olursa olsun sonrasında başlatmak için callback kullanılır
// function process1(callback) {
//     setTimeout(function () {
//         console.log("process1")
//         callback()
//     }, 3000)

// }

// function process2() {
//     setTimeout(function () {
//         console.log("process2")
//     }, 2000)
// }

// // process1()
// // process2()
// process1(process2)  // callback function
// console.log("naber")

// ÖRNEK 3
const langs = ["Python", "Javascript", "C++"]

function addLang(lang, callback) {
    setTimeout(function () {
        langs.push(lang)
        console.log("Eklendi")
        callback()
    }, 2000)
}

function getAllLangs() {
    setTimeout(function () {
        langs.forEach(function (lang) {
            console.log(lang)
        })
    }, 1000)
}

addLang("C#", getAllLangs)
// getAllLangs()   // Asenkron Durum
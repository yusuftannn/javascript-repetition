// Set Timeout

// setTimeout(function(){
//     document.querySelector("#button").addEventListener("click",click)
// })

// function click(){
//     console.log("naber")
// }

// setTimeout(function () {
//     console.log("naber")
// }, 3000)


// Set Interval

let i = 0
let value = setInterval(function () {
    i++
    console.log("Sayı:", i)
}, 1000)

// Clear Interval
document.getElementById("button").addEventListener("click", function () {
    clearInterval(value)
    console.log("Sayaç durduruldu..")
})




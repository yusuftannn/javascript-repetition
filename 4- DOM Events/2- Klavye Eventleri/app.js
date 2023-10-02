// KLAVYE EVENTLERİ
const header  = document.querySelector(".card-header")
const todoInput = document.querySelector("#todo");
// keypress
// document.addEventListener("keypress",run)   // klavede herhangi bir tuşa basıldığında çalışıyor. Yalnızca sayı, harf ve noktalama işaretleri

// function run (e){
//     //console.log(e.which)    // klavyede hangi tuşa basıldığı ascii tablosundaki karşılığı veriyor
//     console.log("naber")
//     console.log(e.key)  // klavyede hangi tuşa basıldıysa onu yazdırır.
// }

// keydown

// document.addEventListener("keydown",run)   // klavedeki tüm tuşları yazdırabilir.

// function run (e){
//     console.log("naber")
//     console.log(e.key)  // klavyede hangi tuşa basıldıysa onu yazdırır.
// }


// keyup

// document.addEventListener("keyup",run)   // klavedeki tüm tuşları yazdırabilir.
//                                         // tuşa basılıp bıraktığında yazar
// function run (e){
//     console.log("naber")
//     console.log(e.key)  // klavyede hangi tuşa basıldıysa onu yazdırır.
// }


// ÖRNEK
todoInput.addEventListener("keyup",changeText)

function changeText(e){
    header.textContent = e.target.value
    // console.log(e.target.value)
}




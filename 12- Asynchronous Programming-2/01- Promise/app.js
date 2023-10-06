// Promise

// RESOLVE
// function getData(data) {        // Promise objesi döndüren fonksiyon
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {

//             resolve("Olumlu sonuç")
//         }, 10000)
//     })
// }

// console.log(getData("Merhaba"))


// REJECT
// function getData(data) {        // Promise objesi döndüren fonksiyon
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {

//             reject("Olumsuz sonuç")
//         }, 5000)
//     })
// }

// console.log(getData("Merhaba"))


// RESOLVE -2 THEN
// function getData(data) {        // Promise objesi döndüren fonksiyon
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {

//             resolve("Olumlu sonuç")
//         }, 5000)
//     })
// }

// getData("Merhaba").then(function (response) {
//     console.log(response)
// })

// REJECT -2 CATCH
// function getData(data) {        // Promise objesi döndüren fonksiyon
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {

//             reject("Olumsuz sonuç")
//         }, 5000)
//     })
// }

// getData("Merhaba").catch(function (err) {
//     console.log(err)
// })


// RESOLVE + REJECT
// function getData(data) {        // Promise objesi döndüren fonksiyon
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {

//             if (typeof data === "string") {
//                 // Olumlu
//                 resolve(data)
//             } else {
//                 // Olumsuz
//                 reject(new Error("Lütfen string bir değer girin..."))
//             }
//         }, 5000)
//     })
// }

// NOT: Then olumlu sonuçta - Catch olumsuz sonuçta kullanılır !!!

// 1. yazım
// getData(21).then(function (response) {
//     console.log("Gelen Değer " + response)
// }).catch(function (err) {
//     console.error(err)
// })

// 2. ve daha düzenli yazım
// getData(21)
// .then(response => console.log("Gelen Değer " + response))
// .catch(err => console.error(err))

// ÖRNEK

function addTwo(number) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (typeof number === "number") {
                resolve(number + 2)
            } else {
                reject(new Error("Lütfen bir sayı girin..!"))
            }
        }, 3000)
    })
}

addTwo(10)
    .then(response => {
        console.log(response)
        return response + 2
    }).then(response2 => console.log(response2))
    .catch(err => console.log(err))

// NOT: PROMİSE TE CATCH YALNIZCA 1 DEFA KULLANILIR. 
// NOT: ANCAK BİRDEN ÇOK THEN KULLANILABİLİR.
// NOT: Return yapısıyla ile Promise Chain yapılabilir.
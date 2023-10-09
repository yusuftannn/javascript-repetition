// Async, Await

// 1
// async function test(data) {
//     // Promise return new Promise
//     return data;
// }

// console.log(test("merhaba"))

// 2
// async function test(data) {
//     // Promise return new Promise
//     return new Promise((resolve,reject) => {
//         resolve(data)
//     })
// }

// test("Merhaba").then(response => console.log(response))


// 3 - Await
// Await yalnızca async function larda çalışır...!
// async function test(data) {
//     // Promise return new Promise
//     // return data
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Bu bir değerdir.")
//         }, 5000)
//     })
//     let response = await promise    // 5 saniye bekleyecek

//     return response
//     // console.log(response)
//     // console.log("Naber")
// }

// test("Merhaba").then(res => console.log(res))

// 4 
// async function testData(data) {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(typeof data === "string"){
//                 resolve(data)
//             }else{
//                 reject(new Error("Lütfen string bir değer girin..."))
//             }
//         }, 5000)
//     })
//     const response = await promise

//     return response
// }

// testData(24)
// .then(data => console.log(data))
// .catch(err => console.log(err))

// 5 - async await ve fetch birlikte kullanımı
async function getCurrency(url) {
    const response = await fetch(url)       // Response object

    const data = await response.json()      // Json object

    return data
}
getCurrency("https://jsonplaceholder.typicode.com/albums")
    .then(res => console.log(res))
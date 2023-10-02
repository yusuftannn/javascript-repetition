// const merhaba = function (){
//     console.log("merhaba")
// }
// merhaba()

// ******* Arrow Function ******* //

// const merhaba = () => {
//     console.log("merhaba")
// }
// merhaba()

// 1
// const merhaba = (firstName, lastName) => {
//     console.log("merhaba",firstName, lastName)
// }
// merhaba("Yusuf","Tan")

// 2
// const merhaba = firstName => {  // "firstName" TEK ise parantez koymaya gerek yok. hatta süslü parantezi bile
//     console.log("merhaba", firstName)
// }
// merhaba("Yusuf")

// 3. örnek 1.yazım
// const cube = x => {
//     return x*x*x;
// }
// console.log(cube(4))

// 3. örnek 2.yazım süslü parantez ve return yazmaya gerek kalmadı tek bir işlem ise.
const cube = x => x * x * x;
console.log(cube(4))

// ÖRNEK 1
// let a = "Yusuf"
// let b = "Yusuf"

// if(a===b){
//     console.log("eşit")  // ekrana bunu yazar 
// }

// ÖRNEK 2
// let array1 = [1, 2, 3, 4, 5]
// let array2 = [1, 2, 3, 4, 5]

// if (array1 === array2) {
//     console.log("eşit")
// }else{
//     console.log("eşit değil")   // ekrana bunu  yazar
// }

// ÖRNEK 3
// const person1 = {
//     name:"Yusuf",
//     age:"23"
// }
// const person2 = {
//     name:"Yusuf",
//     age:"23"
// }
// if (person1 === person2) {
//     console.log("eşit")
// }else{
//     console.log("eşit değil") // ekrana bunu yazar
// }

// ÖRNEK 4
const cities = new Map()
const key = [1,2,3]
cities.set("Kocaeli",5)
cities.set("İstanbul",15)
cities.set([1,2,3],"Array")
cities.set(key,"Array")

console.log(cities.get("Kocaeli"))  // ekrana 5 yazar
console.log(cities.get([1,2,3]))    // undefined
console.log(cities.get(key))        // ekrana Array yazar
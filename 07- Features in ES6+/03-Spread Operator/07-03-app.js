// Spread Operator

const langs = ["Python", "C++", "Javascript", "PHP"]

// console.log(langs[0],langs[1],langs[2],langs[3])

console.log(...langs)   // spread operator
//ÖRNEK
// const langs2 = ["C#", "Java", ...langs]   // Spread operator ile birleştirildi.
// console.log(langs2)

//ÖRNEK 
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const [a, b, ...number2] = numbers
// console.log(a, b)
// console.log(number2)

// ÖRNEK
const addNumbers = (a, b, c) => {
    console.log(a + b + c)
}
const numbers = [100, 200, 300]
addNumbers(...numbers)

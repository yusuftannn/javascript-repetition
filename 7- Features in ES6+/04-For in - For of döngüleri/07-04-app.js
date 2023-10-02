const person = {
    name: "Yusuf",
    age: 23,
    salary: 20.000
}
const langs = ["Python", "C#", "Javascript", "C++"]

const name = "Yusuf"

// For In
// Object
// for(let prop in person){
//     console.log(prop,person[prop])
// }

// Array
// for(let index in langs){
//     console.log(index,langs[index])
// }

// String
// for (let index in name){
//     console.log(index,name[index])
// }

// For of
// Object   // HATA VERİYOR
// for (let value of person) {
//     console.log(value)
// }

// Array
// for(let value of langs){
//     console.log(value)
// }

// String
for(let character of name){
    console.log(character)
}


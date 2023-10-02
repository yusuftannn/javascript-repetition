// Object Literal //

let value;

const programmer = {
    name: "Yusuf",
    age: 21,
    email: "yusuftan41@hotmail.com",
    langs: ["HTML", "CSS", "Javascript"],

    adress: {
        city: "İstanbul",
        street: "Etiler"
    },
    work: function () {
        console.log("Programcı Çalışıyor...");
    }
}

value = programmer;

value = programmer.email
value = programmer.langs

value = programmer.adress.city

value = programmer.work();


const programmers = [
    { name: "Yusuf", age: 21 },
    { name: "Ahmet", age: 23 }
]

value = programmers[0].age

console.log(value)
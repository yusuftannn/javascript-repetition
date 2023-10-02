//----------- Functions ----------- //
// 1-
// function merhaba(name = "Lütfen Doldurun!", age = "Lütfen Doldurun!") {
//     // if (typeof name === "undefined") name = "Lütfen Doldurun!";

//     // if (typeof age === "undefined") age = "Lütfen Doldurun!";

//     console.log(`İsim: ${name} yaş: ${age}`)
// }
// merhaba("Yusuf", 22);

// merhaba("Ali", 22)

// merhaba()

// 2-
// RETURN Kullanımı //
// function square(x) {
//     return x * x;
// }
// function cube(x) {
//     return x * x * x
// }
// let a = cube(square(12));



// 3- Function Expression //

// const js = function(isim){
//     console.log("Merhaba " + isim);
// };

// js("Yusuf")

// 4- IIFE functions
// (function (ad) {
//     console.log("Merhabalar: " + ad)
// })("Yusuf");

const database = {
    host: "localhost",
    add: function () {
        console.log("Eklendi")
    },
    get:function(){
        console.log("Elde Edildi.")
    },
    update: function(id){
        console.log(`Id: ${id} Güncellendi`);
    },
    delete: function(id){
        console.log(`Id: ${id} Silindi`);
    }
}

console.log(database.host)
database.add()
database.update(3)
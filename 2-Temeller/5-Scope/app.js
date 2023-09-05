// SCOPE KAVRAMI

// Global Scope

var value1 = 10;
let value2 = 20;
const value3 = 30;

// function func(){
//     var value1 = 40;
//     let value2 = 50;
//     const value3 = 60;

//     console.log(value1, value2, value3)
// }
// func();

if (true) {
    var value1 = 40;
    let value2 = 50;
    const value3 = 60;
    console.log(value1, value2, value3)
}
console.log(value1, value2, value3)


// ÖNEMLİ ÖRNEK !!!! NOT: "var" değişkeni NEDEN KULLANILMAMAMLI ÖRNEK //
// var database = "1234"

// if(true){
//     var database ="1241251"
// }

// Bu örnekte ilk başka yazdığımız 1234 database şifresi olsun aşağıda if içinde kullanarak şifresini,
// değiştirmiş olduk ve bir daha geri dönmüyor. Ondan dolayı let veya const kullanmak çok daha iyi
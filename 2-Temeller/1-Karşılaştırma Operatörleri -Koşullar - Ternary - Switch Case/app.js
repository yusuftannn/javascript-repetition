//-----------Karşılaştırma Operatörleri - Koşullar - Ternary Operatör ----------- //

// ==
// console.log(2 == 2) // true
// console.log("js" == "c#") // false
// ===
// console.log(2 == "2"); // true
// console.log(2 === "2") // false
// !=
// console.log(23 != 23) // eşit değilmidir eşit olursa false yazar
// !==
// >
// console.log(4 > 56)
// <
// console.log(4 < 56)
// >=
// console.log(4 >= 4)
// <=
// console.log(7 <= 7)

//----------- MANTIKSAL OPERATÖRLER -----------//
// Not operatörleri
// console.log(!(2 != 2))

// And (ve) operatörleri    &&
// Or (veya) operatörleri   ||

//----------- İF - ELSE - ELSE İF -----------//
// const error = true;

// if (error == true) {
//     console.log("Error true değerindedir.")
// } else {
//     console.log("Error false değerindedir.")
// }

// const process = "4";

// if (process === "1") {
//     console.log("İşlem 1")
// }
// else if (process === "2") {
//     console.log("İşlem 2")
// }
// else if (process === "3") {
//     console.log("İşlem 3")
// }
// else if (process === "4") {
//     console.log("İşlem 4")
// }
// else {
//     console.log("Geçersiz İşlem")
// }

//----------- Ternary Operatör -----------// if else kısa yazımı
// 1. yazım 
// const number = 120

// console.log(number === 100 ? "Sayı 100" : "Sayı 100 Değil")

// 2. yazım - tek işlem var ise bu yapılabilir

// if (number === 100) console.log("Sayı 100'e Eşit.")
// else console.log("Sayı 100'e Eşit Değil.")

//----------- SWİTCH CASE -----------//

const process = 4;

switch (process) {
    case 1:
        console.log("İşlem 1");
        break
    case 2:
        console.log("İşlem 2");
        break
    case 3:
        console.log("İşlem 3");
        break
    default:
        console.log("Geçersiz İşlem")
}
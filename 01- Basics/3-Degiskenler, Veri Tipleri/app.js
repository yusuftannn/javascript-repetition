// Değişken Oluşturma

var a = 20;
var b = 10;
var c = 40;

console.log(a, b, c)

// VERİ TİPLERİ - number, string, boolean, null, undefined
// Primitive Veri Tipleri

var a = 10;         // number veri tipi
var b = 3.14;       // number veri tipi

console.log(typeof a)
console.log(typeof b)

var name = "Mustafa";
console.log(name);
console.log(typeof name)    // string veri tipi

var c = true;
console.log(typeof c)       // boolean veri tipi

var d = null;
console.log(d)              // null
console.log(typeof d)       // object

var e;                      // undefined
console.log(e);

// Referance Veri Tipleri   // not: hepsi object dir.

//

var numbers = [1, 2, 3, 4, 5]
console.log(numbers)
console.log(typeof numbers) // object
console.log(numbers[3])
//

var person = {
    name: "Yusuf Tan",
    age: 25
}
console.log(person)
console.log(typeof person)  // object
//

var date = new Date();
console.log(date);
console.log(typeof date)
//

var merhaba = function () {
    console.log("Merhaba")
}
console.log(merhaba);
console.log(typeof merhaba)  // function
//

// Primitive - Referance Veri Tipleri Farklar

// örnek 1 start //
var a = 10;
var b = a;
console.log(a, b)    // a = 10 b = 10

a = 20;
console.log(a, b)    // a = 20 b = 10
// örnek 1 end //

// örnek 2 start //
var a = [1, 2, 3]

var b = a;

a.push(4);
console.log(b);
// örnek 2 end //

// VAR

// var name = "Yusuf Tan";

// var name = "Yusuf"
// console.log(name)

// LET

// 1-
// let name = "Yusuf Tan"
// let name = "Yusuf"      // yapılamaz
// console.log(name)

// 2-
// let a, b;

// a = 10;
// b = 20;
// console.log(a+b)    // a+b = 30 yazdırır.

// CONST

// 1-
// const name = "Yusuf Tan"
// console.log(name)
// const name = "Yusuf"        // yapılamaz
// console.log(name)

// 2-
// const a;

// a = 10;         // const ta değeri sonradan verilmez. değerini ilk başta vermemiz gerekir !!
// console.log(a);

// 3-
// const a = [1, 2, 3, 4, 5];
// console.log(a)
// a = [1, 2, 3, 4, 5, 6];     // TypeError hatası alırız.

// 4-
const a = [1, 2, 3, 4, 5]

console.log(a)
a.push(6);          // yapılır! Sona 6 rakamını ekler.
console.log(a)
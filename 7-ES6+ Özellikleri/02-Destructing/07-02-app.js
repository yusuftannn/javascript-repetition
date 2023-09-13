// let number1, number2

// arr = [100, 200, 300, 400]

// number1 = arr[0]
// number2 = arr[1]

// ******* DESTRUCTING ******* //
// const [number1, number2] = arr

// console.log(number1,number2)

// ******* Obje DESTRUCTING ******* //

// const numbers = {
//     a: 10,
//     b: 20,
//     c: 30,
//     d: 40,
//     e: 50
// }

// const { a:number1, c:number2, e:number3 } = numbers

// console.log(number1,number2,number3)

// ******* Function Destructing ******* //
// 1.örnek
// const getLangs = () => ["Python","Javascript","C++"]
// const [lang1,lang2,lang3] = getLangs()
// console.log(lang1,lang2,lang3)

// 2.örnek // Obje 
const person = {
    name: "Yusuf",
    year:"2001",
    salary:"50.000",
    showInfos: () => console.log("Bilgiler gösteriliyor...")
}
const {name:isim,year:yil,salary:maas,showInfos:bilgileriGoster} = person    // obje olduğundan süslü parantez

console.log(isim,yil,maas)
bilgileriGoster()


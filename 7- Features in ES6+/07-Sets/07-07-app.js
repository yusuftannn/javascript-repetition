// SETS = KÜMELER //
// Bir değeri yalnızca bir defa taşıyor.

const myset = new Set()

myset.add(100)
myset.add(100)
myset.add(3.14)
myset.add("Yusuf")
myset.add(true)
myset.add([1, 2, 3])
myset.add({ a: 1, b: 2 })

const myset2 = new Set([100, 3.14, "Yusuf"])
// console.log(myset)
// console.log(myset2)

// Size
// console.log(myset.size)

// Delete
// myset.delete("Yusuf")
// console.log(myset)

// Has Metodu
// console.log(myset.has("Yusuf"))     // var ise true ekrana yazar
// console.log(myset.has(3.14))        // true ekrana yazar
// console.log(myset.has(2000))        // false ekrana yazar
// console.log(myset.has([1, 2, 3]))   // false ekrana yazar

// For Each
// myset.forEach((value)=>{
//     console.log(value)   // Tüm her şey alt alta yazar
// })

// For of
// for(let value of myset){
//     console.log(value)      // Tüm her şey alt alta yazar
// }

// const array = Array.from(myset)
// console.log(array)


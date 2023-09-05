let value;

const numbers = [43, 56, 33, 23, 1, 4, 535]

// const numbers2 = new Array(1,2,3,4,5,6)

const langs = ["Python", "Java", "C++", "Javascript"]

const a = ["Merhaba", 22, null, undefined, 3.14]

// Uzunluk
value = numbers.length
// Indeksleme
value = numbers[0]
value = numbers[3]
value = numbers[numbers.length - 1]

// Herhangi bir indeksteki değeri değiştirme

numbers[2] = 1000;

value = numbers

// Index Of

value = numbers.indexOf(1000) // kaçıncı dizide olduğu
value = numbers;

numbers.push(2000) // Arrayin sonuna değer ekleme
value = numbers;

numbers.unshift(3000) // Arrayin başına değer ekleme
value = numbers;

numbers.pop() // sonundaki değeri silme
value = numbers

numbers.shift()  // başından değer silme
value = numbers

numbers.splice(0, 4) // baştan 4ü silme // belli bir kısmı silme
value = numbers

numbers.reverse() // ters çevirme 
value = numbers


value = numbers.sort(function (x, y) {      // Küçükten büyüğe sıralama
    return x - y
})

value = numbers.sort(function (x, y) {      // Büyükten küçüğe sıralama
    return y - x
})

console.log(value)
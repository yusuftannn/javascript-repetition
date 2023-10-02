const element = document.querySelector("#clear-todos");


// Element Özellikleri
// console.log(element.id)
// console.log(element.className)
// console.log(element.classList)
// console.log(element.classList[0])
// console.log(element.textContent)
// console.log(element.innerHTML)
// console.log(element.href)
// console.log(element.style)

// Style ve Element Özellikleri Değiştirme
// element.className = "btn btn-primary"
// element.style.color = "#000"
// element.style.fontWeight = "bold"
// element.href = "https://www.google.com"
// element.target = "_blank"
// element.textContent = "Siliniz"
// element.innerHTML = "<span style='color:yellow'>Silin</span>"


// TÜM Lİ LERE UYGULAMAK İÇİN
// const elements = document.querySelectorAll(".list-group-item") // Node List

// elements.forEach(function(el) {
//     el.style.color = "red"
//     el.style.background = "#eee"
// })

let element2 = document.querySelector("li:last-child")
element2 = document.querySelector("li:nth-child(2)")
element2 = document.querySelector("li:nth-child(3)")
element2 = document.querySelectorAll("li:nth-child(odd)")   // 1 ve 3 ü alır.
element2 = document.querySelectorAll("li:nth-child(even)")  // 2 ve 4 ü alır.

// Yalnızca 2 ve 4 e uyguladı
// element2.forEach(el => {
//     el.style.background = "#ccc"
//     el.style.color = "red"
// });

console.log(element2)

// console.log(elements)
// console.log(element)
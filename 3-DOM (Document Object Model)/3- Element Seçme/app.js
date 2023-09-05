let element

element = document.getElementById("todo-form")
element = document.getElementById("tasks-title")

// Element Class'a Göre Seçme

element = document.getElementsByClassName("list-group-item")
element = document.getElementsByClassName("card-header")

// Element Tag'e Göre Seçme

element = document.getElementsByTagName("li");

// QuerySelector - Css Selector - Tek Bir Element

element = document.querySelector("#todo-form")
element = document.querySelector(".list-group-item")
element = document.querySelector("li")

// QuerySelectorAll - Tüm Elementleri Seç
element = document.querySelectorAll(".list-group-item")

element.forEach(function (x) {
    console.log(x)
})



// console.log(element)
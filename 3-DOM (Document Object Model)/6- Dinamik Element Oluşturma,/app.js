// Yeni Element Oluşturma

// <a id="clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>

const newLink = document.createElement("a")
const cardbody = document.getElementsByClassName("card-body")[1]

newLink.id = "clear-todos" 
newLink.className = "btn btn-primary"
newLink.href = "https://www.google.com"
newLink.target = "_blank"
newLink.appendChild(document.createTextNode("Farklı Sayfaya Git")) //  Bir elementin içine yazı eklemek istersek bu şekilde yapılmalı!! 
cardbody.appendChild(newLink)
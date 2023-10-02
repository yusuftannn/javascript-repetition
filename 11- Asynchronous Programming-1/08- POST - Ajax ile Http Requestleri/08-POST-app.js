// POST


// 1. yöntem
// class Request {
//     constructor() {
//         this.xhr = new XMLHttpRequest()
//     }
//     get(url) {
//         this.xhr.open("GET", url) // Bağlantı açık
//         const temp = this           // 1. yöntem
//         this.xhr.onload = function () {            

//             // console.log(this)
//             if (temp.xhr.status == 200) {           // this.status == 200 yazarak 2. yöntem
//                 console.log(temp.xhr.responseText)  // this.responseText 2.yöntem için
//             }
//         } //.bind(this) -> hata almamak için bir yöntem 3. yöntem

//         this.xhr.send()
//     }
// }


// 2. yöntem -> en kolayı diyebilirim.
// class Request {
//     constructor() {
//         this.xhr = new XMLHttpRequest()
//     }
//     get(url) {
//         this.xhr.open("GET", url) // Bağlantı açık     
//         this.xhr.onload = () => {       // arrow function yaparak hata almadık..

//             // console.log(this)
//             if (this.xhr.status == 200) {
//                 console.log(this.xhr.responseText)
//             }
//         }

//         this.xhr.send()
//     }
// }

// const request = new Request()

// request.get("https://jsonplaceholder.typicode.com/albums")


// callback
// class Request {
//     constructor() {
//         this.xhr = new XMLHttpRequest()
//     }
//     get(url,callback) {
//         this.xhr.open("GET", url) // Bağlantı açık     
//         this.xhr.onload = () => {       // arrow function yaparak hata almadık..

//             // console.log(this)
//             if (this.xhr.status == 200) {
//                 callback(this.xhr.responseText) // isteğimiz bitti
//             }
//         }

//         this.xhr.send()
//     }
// }

// const request = new Request()

// request.get("https://jsonplaceholder.typicode.com/albums", function(response){
//     console.log(response)
// })

// Hata Mesajı
class Request {
    constructor() {
        this.xhr = new XMLHttpRequest()
    }
    get(url, callback) {
        this.xhr.open("GET", url) // Bağlantı açık     
        this.xhr.onload = () => {       // arrow function yaparak hata almadık..

            // console.log(this)
            if (this.xhr.status == 200) {
                callback(null, this.xhr.responseText) // isteğimiz bitti
            }
            else {
                // Hata durumu // Status 200(başarılı) olmama dururumu
                callback("GET REQUEST: Herhangi bir hata oluştu..!", null)
            }
        }

        this.xhr.send()
    }
    post(url, data, callback) {
        this.xhr.open("POST", url)
        this.xhr.setRequestHeader("Content-type", "application/json")    // JSON verisi

        this.xhr.onload = () => {
            if (this.xhr.status === 201) {
                // Başarılı
                callback(null, this.xhr.responseText)
            } else {
                callback("POST REQUEST: Herhangi bir hata oluştu..!", null)
            }
        }
        this.xhr.send(JSON.stringify(data))
    }
}

const request = new Request()

// GET
// request.get("https://jsonplaceholder.typicode.com/albums", function (err, response) {
//     if (err === null) {
//         // Başarılı
//         console.log(response)
//     } else {
//         // Hata
//         console.log(err)
//     }
// })

// POST
request.post("https://jsonplaceholder.typicode.com/albums", { userId: 2, title: "Yusuf" }, function (err, album) {
    if (err === null) {
        console.log(album)
    } else {
        // HATA
        console.log(err)
    }
})    
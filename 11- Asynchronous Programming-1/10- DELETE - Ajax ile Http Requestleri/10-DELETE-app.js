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
    put(url, data, callback) {
        this.xhr.open("PUT", url)
        this.xhr.setRequestHeader("Content-type", "application/json")    // JSON verisi

        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                // Başarılı
                callback(null, this.xhr.responseText)
            } else {
                callback("PUT REQUEST: Herhangi bir hata oluştu..!", null)
            }
        }
        this.xhr.send(JSON.stringify(data))
    }
    delete(url, callback) {
        this.xhr.open("DELETE", url) // Bağlantı açık     
        this.xhr.onload = () => {       // arrow function yaparak hata almadık..

            // console.log(this)
            if (this.xhr.status === 200) {
                callback(null, "Veri silme işlemi başarılı...") // isteğimiz bitti
            }
            else {
                // Hata durumu // Status 200(başarılı) olmama dururumu
                callback("DELETE REQUEST: Herhangi bir hata oluştu..!", null)
            }
        }

        this.xhr.send()
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

// POST     // Veri ekleme
// request.post("https://jsonplaceholder.typicode.com/albums", { userId: 2, title: "Yusuf" }, function (err, album) {
//     if (err === null) {
//         console.log(album)
//     } else {
//         // HATA
//         console.log(err)
//     }
// })    

// PUT  // Veri güncelleme
// request.put("https://jsonplaceholder.typicode.com/albums/15", { userId: 300, title: "Tan" }, function (err, album) {
//     if (err === null) {
//         console.log(album)
//     } else {
//         // HATA
//         console.log(err)
//     }
// })    

// DELETE  // Veri Silme
request.delete("https://jsonplaceholder.typicode.com/albums/15", function (err, response) {
    if (err === null) {
        // Başarılı
        console.log(response)
    } else {
        // Hata
        console.log(err)
    }
})
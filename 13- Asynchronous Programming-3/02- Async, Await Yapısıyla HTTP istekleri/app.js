// Async, Await yapısıyla HTTP istekleri
// Await = bir promise in resolve etmesini bekler.

class Request {
    async get(url) {  // Get Request

        // FETCH ile
        // return new Promise((resolve, reject) => {
        //     fetch(url)
        //         .then(response => response.text())
        //         .then(data => resolve(data))
        //         .catch(err => reject(err))
        // })

        // async ile 
        const response = await fetch(url)   // Response object
        const data = await response.json()  // JSON object
        return data

    }
    async post(url, data) {   // Post Request

        // FETCH ile
        // return new Promise((resolve, reject) => {
        //     fetch(url, {
        //         method: "POST",
        //         body: JSON.stringify(data),
        //         headers: { "Content-type": "application/json; charset=UTF-8" }
        //     })
        //         .then(response => response.json())
        //         .then(data => resolve(data))
        //         .catch(err => reject(err))
        // })

        // async ile
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })  // response object
        const responsedata = await response.json()
        return responsedata
    }

    async put(url, data) {    // Put Request

        // FETCH ile
        // return new Promise((resolve, reject) => {
        //     fetch(url, {
        //         method: "PUT",
        //         body: JSON.stringify(data),
        //         headers: { "Content-type": "application/json; charset=UTF-8" }
        //     })
        //         .then(response => response.json())
        //         .then(data => resolve(data))
        //         .catch(err => reject(err))
        // })

        // async ile
        const response = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })  // response object

        const responsedata = await response.json()
        return responsedata
    }

    async delete(url) {   // Delete Request

        // FETCH ile
        // return new Promise((resolve, reject) => {
        //     fetch('https://jsonplaceholder.typicode.com/albums/1', {
        //         method: "DELETE"
        //     })
        //         .then(response => resolve("Veri silme işlemi başarılı"))
        //         .catch(err => reject(err))
        // })

        // async ile
        const response = await fetch('https://jsonplaceholder.typicode.com/albums/1', {
            method: "DELETE"
        })  // response object
        // const data = await response.json()
        return "Veri silme işlemi başarılı.."
    }
}

const request = new Request()

// GET
let albums
request.get("https://jsonplaceholder.typicode.com/albums")
    .then(albums => {
        console.log(albums)
    })
    .catch(err => console.log(err))

// POST
request.post("https://jsonplaceholder.typicode.com/albums", { userId: 1, title: "Mars" })
    .then(newAlbum => console.log(newAlbum))
    .catch(err => console.log(err))

// PUT
request.put("https://jsonplaceholder.typicode.com/albums/10", { userId: 10, title: "Venüs" })
    .then(album => console.log(album))
    .catch(err => console.log(err))

// DELETE
request.delete("https://jsonplaceholder.typicode.com/albums/1")
    .then(message => console.log(message))
    .catch(err => console.log(err))
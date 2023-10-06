// ********** FETCH ********** //

// TEXT FILE
function getTextFile() {


    fetch("/12- Asynchronous Programming-2/02- Fetch/example.txt")
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(err => console.log(err))

}
getTextFile()

// JSON FILE
function getJsonFile() {
    fetch("/12- Asynchronous Programming-2/02- Fetch/example.json")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

getJsonFile()

// EXTERNAL API
function getExternalAPI() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}
getExternalAPI()
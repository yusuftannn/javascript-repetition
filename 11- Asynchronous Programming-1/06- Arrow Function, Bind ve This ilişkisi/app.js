// Arrow Function, Bind ve This

const person = {
    age: 25,

    // 1. Gösterim
    // tellAge: function () {
    //     console.log(this) // bu bulunan person objeyi gösterir
    //     console.log(this.age)
    // }.bind(this)    // bind: yukarıdaki this i window objesine çevirdi..

    // 2. Gösterim
    tellAge: () => {        // arrow function ile this window objesini gösterdi
        console.log(this)
        console.log(this.age)
    }


}
person.tellAge()

// NOT: Arrow function ile this windowa döndü. Normal function ile bind kullanarak windowa dönmüş oldu
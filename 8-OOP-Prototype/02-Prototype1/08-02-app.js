// const object = new Object
// const object2 = new Object()
// object.name = "Yusuf"
// console.log(object)

function Employee(name, age) {
        this.name = name,
        this.age = age
        this.showInfos = function(){
            console.log("Bilgiler Gösteriliyor..")
        }
        this.toString = function () {
            console.log("Bu bir Employee Objesi")
        }
}
const emp1 = new Employee("Yusuf",25)
console.log(emp1)

console.log(emp1.toString())    // "Bu bir employee objesi" ekran yazar
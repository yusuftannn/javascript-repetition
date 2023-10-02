// // ******* OLD ******* //
// function Person(name, age) {
//     this.name = name
//     this.age = age
// }
// Person.prototype.showInfos = function () {
//     console.log("İsim:" + this.name + " Yaş:" + this.age)
// }
// const person = new Person("Yusuf", 23)
// console.log(person)

// function Employee(name, age, salary) {
//     // this.name = name
//     // this.age = age
//     // Call kullanımı
//     Person.call(this, name, age)
//     this.salary = salary
// }
// Employee.prototype = Object.create(Person.prototype)
// Employee.prototype.toString = function () {
//     console.log("Employee")
// }
// // Overriding - İptal etme
// Employee.prototype.showInfos = function () {
//     console.log("İsim:" + this.name + " Yaş:" + this.age + " Maaş:" + this.salary)
// }
// const emp = new Employee("Yusuf", 23, 50000)

// ******* NEW ******* //
class Person {     // SuperClass, BaseClass
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    showInfos() {
        console.log("İsim:" + this.name + " Yaş:" + this.age)
    }
}
class Employee extends Person {     // DerivedClass, SubClass, ChildClass
    constructor(name, age, salary) {
        // this.name = name
        // this.age = age
        super(name, age)     // super: bir üst sınıfın özelliklerini kullanma
        this.salary = salary
    }
    showInfos() {   // Overriding: eskiyi yeniye çeviriyoruz
        console.log("İsim:" + this.name + " Yaş:" + this.age + " Maaş:" + this.salary)
    }
    toString() {    // Overriding: eskiyi yeniye çeviriyoruz
        console.log("Employee")
    }
    raiseSalary(amount){    // Ekstra
        this.salary += amount
    }
}
const emp = new Employee("Yusuf", 23, 50000)
emp.raiseSalary(500)
// console.log(emp)
emp.showInfos()
emp.toString()
// ÖRNEK
// const obj = {
//     test1: function () {
//         console.log("Test 1")
//     },
//     test2: function () {
//         console.log("Test 2")
//     }
// }
// // console.log(obj)
// const emp = Object.create(obj)
// emp.name = "Yusuf"
// emp.age = "23"
// console.log(emp)

// ÖRNEK -2
function Person() {

}
Person.prototype.test1 = function () {
    console.log("Test 1")
}
Person.prototype.test2 = function () {
    console.log("Test 2")
}
function Employee(name, age) {
    this.name = name;
    this.age = age;
}

Employee.prototype = Object.create(Person.prototype)
Employee.prototype.myTest = function(){
    console.log("My Test")
}
const emp = new Employee("Yusuf",23)
console.log(emp)
emp.test1()

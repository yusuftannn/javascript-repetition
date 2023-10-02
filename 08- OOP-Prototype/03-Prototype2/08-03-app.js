function Employee(name, age) {
    this.name = name,
        this.age = age

}
Employee.prototype.showInfos = function () {
    console.log("İsim:" + this.name + "Yaş:" + this.age)
}
const emp1 = new Employee("Yusuf", 23)
const emp2 = new Employee("Ahmet", 25)
emp2.showInfos()
console.log(emp1)
console.log(emp2)
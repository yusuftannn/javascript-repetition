// console.log(this) // Global Scope

// const emp1 = {      // Object Literal
//     name:"Yusuf",
//     age:"23",
//     showInfos: () => {console.log("Bilgiler Gösteriliyor..")}
// }
// const emp2 = {
//     name:"Ahmet",
//     age:"20"
// }

// emp1.salary = 4000  // yeni bir özellik salary atadık 
// emp1.showInfos()
// console.log(emp1)
// console.log(emp2)

function Employee(name, age, salary) {  // Constructor = Yapıcı Fonksiyon
        this.name = name,
        this.age = age,
        this.salary = salary
        
        this.showInfos = function(){
            console.log(this.name,this.age,this.salary)
        }
}
const emp1 = new Employee("Yusuf", 23, 50000)
const emp2 = new Employee("Ahmet", 25, 25000)
// console.log(emp1)
// console.log(emp2)
emp1.showInfos()
emp2.showInfos()


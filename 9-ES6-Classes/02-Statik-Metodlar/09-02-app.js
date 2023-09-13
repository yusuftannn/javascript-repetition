// ******* STATİK METODLAR ******** //

// class Matematik {
//     cube(x) {
//         console.log(x * x * x)
//     }
// }
// const math = new Matematik()
// math.cube(3)
// console.log(math)

// Obje kullanmak istemezsek static yazıp aşağıdaki gibi olmalı
// Obje kullanmak istersek erişilmez
// static yazılmayıp bu yazım da kullanılmaz
class Matematik {
    static cube(x) {
        console.log(x * x * x)
    }
}
Matematik.cube(3)
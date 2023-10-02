// Zaman objesi ve metodları //

let value;

const now = new Date() // Şu anki zamanı  almamızı sağlar
console.log(now)

const date1 = new Date("05-24-2001 12:12:12");

const date2 = new Date("Mayıs 24 2001")

const date3 = new Date("05/24/2001")

value = date1
value = date2

value = date1.getMonth();
value = date1.getDate()
value = date1.getDay()

value = date1.getHours()
value = date1.getMinutes()
value = date1.getSeconds()

date1.setMonth(1)
date1.setDate(14)
date1.setFullYear(2000)
date1.setHours(0)

value = date1
console.log(value)
// tüm kodlar mevcut -> console.log(window)

// CONFİRM //
// 1. YOL
// const cevap = confirm("Emin misiniz?")

// if(cevap == true){
//     console.log("Harika! Kabul Ettiniz.")
// }else{
//     console.log("Kabul etmediniz!")
// }

// 2. YOL

// if (confirm("Emin misiniz?")) {
//     console.log("Harika! Kabul Ettiniz.")
// } else {
//     console.log("Kabul etmediniz!")
// }

// PROMPT //
// const cevap = prompt("2 + 2 = ?")

// if(cevap == "4"){
//     console.log("Doğru cevap verdin!")
// }else{
//     console.log("Yanlış cevap!")
// }

// ÖRNEK //
// let value;
// value = window
// value = window.location
// value = window.location.host
// console.log(value)

// if (confirm("Sayfa yenilensin mi?")) {
//     window.location.reload();
// }else{
//     console.log("Sayfa yenilenmedi");
// }

// Sayfa içi uzunluk genişlik ölçmek için //
value = window.innerHeight;
console.log(value)
value = window.innerWidth;
console.log(value)
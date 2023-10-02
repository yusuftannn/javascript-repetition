let value;

// ***** Veri tiplerini String'e Çevirme ***** //

value = 152;
value = String(152);
value = String(3.14);
value = String(true);
// not: Bu yazım ile her şey stringe çevirilebilir.

value = (10).toString();        // stringe çevirmenin diğer bir yolu.
value = (3.14).toString();

// ***** Veri tiplerini Sayılara Çevirme ***** //
value = Number("123");
value = Number(null);              // 0 değerindedir. number çevirilir

// Aşağıdakiler -> NaN (not a number - (bir sayı değil)) ekrana yazar numbera döndürülmez.!
value = Number(undefined)
value = Number("Hello World");
value = Number(function () { console.log() })
value = Number([1, 2, 3, 4])

// aşağıdakiler ekrana yazar ve number a çevirir.  
value = Number("3.14")
value = parseFloat("3.14")
value = parseInt("3")

// iki stringi birleştirip yeni bir string oluşturdu yani "41" sayısını otomatik stringe çevirip ekrana "Hello41" yazdı.
const a = "Hello" + 41;

console.log(a)
console.log( typeof a)

console.log(value)
console.log(typeof value)

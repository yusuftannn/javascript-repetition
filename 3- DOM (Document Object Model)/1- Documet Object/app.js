let value;

value = document;
value = document.all; 
value = document.all.length;
value = document.all[0];
value = document.all[document.all.length-1]

const elements = document.all // HTML collection
// for (let i = 0; i < elements.length; i++) {
//     console.log(elements[i])
// }

// elements.forEach(function (elements) {       HTML COLLECTİONDA FOREACH KULLANILAMAZ!!
//     console.log(elements)
// })

const collections = Array.from(document.all);   // ARRAY E ÇEVRİLDİ

collections.forEach(function (collection) {     // ARRAY çevrildiği için oldu
    console.log(collection)    
});
// console.log(value);

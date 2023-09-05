const name = "Yusuf Tan";
const department = "Yazılım"
const salary = 8500;

// TEMPLATE LİTERAL //
// 1-
// const a = "İsim: "+ name + "\n" + "Departman: " + department + "\n" + "Maaş: " + salary

// 1- doğru kullanım (template literal)
// const a = `
// İsim: ${name}
// Departman: ${department}
// Maaş: ${salary}
// `
// console.log(a)

// 2-
// const html = "<ul>" +
//     "<li>" + name + "</li>" +
//     "<li>" + department + "</li>" +
//     "<li>" + salary + "</li>" +
//     "</ul>"

// 2- doğru kullanım

function a() {
    return "Merhaba";
}

const html = `
<ul>
<li>${name}</li>
<li>${department}</li>
<li>${salary}</li>
<li>${10 / 4}</li>
<li>${a()}</li>
</ul>
`

document.body.innerHTML = html



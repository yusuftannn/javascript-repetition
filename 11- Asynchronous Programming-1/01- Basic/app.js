// Http Status
// 200 : OK
// 403 : Forbidden
// 404 : Not Found
// 505 : Internal Server Error

document.getElementById("btn").addEventListener("click",function(){
    
    // XMLHttpRequest

    const xhr = new XMLHttpRequest()

    // xhr.onprogress = function(){
    //     console.log("Process İşleniyor...",this.readyState)
    // }
    // YENİ YÖNTEM
    xhr.onload = function(){
        if (this.status === 200){
            document.getElementById("ajax").textContent = this.responseText
        }
    }

    // ESKİ YÖNTEM
    // xhr.onreadystatechange = function(){
    //     if(this.status == 200 && this.readyState == 4){
    //         // Response Hazır
    //         console.log(this.responseText)
    //     }

    // }
    xhr.open("GET","example.txt",true)

    xhr.send()

})
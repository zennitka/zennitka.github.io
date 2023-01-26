document.querySelector("h2")
let prizma;
prizma=document.getElementById("display")
document.addEventListener("click",function (e){
    console.log(e)
    let num;
    num=e.target.textContent
    if (e.target.className!="disp" && e.target.localName!="p"){
    if (num=="⌫"){
        prizma.innerHTML=prizma.textContent.slice(0,-1)
    }
    if (Number(num)<=Number(num)+1 && prizma.textContent.length<27) {
        prizma.innerHTML = (prizma.textContent + num).trim()
        if (prizma.textContent.includes("⌫")){
            prizma.innerHTML=prizma.textContent.slice(0,-1)
        }
    }
    else {
        if(e.target.offsetParent.className="content"){
            if (prizma.textContent.length<27){
            prizma.innerHTML = (prizma.textContent + num).trim()
                if(prizma.textContent.includes("=") && prizma.textContent.length>1){
                    if (prizma.textContent.includes("⌫")){
                        prizma.innerHTML=""
                    }
                    prizma.innerHTML = (prizma.textContent).trim() + eval(prizma.textContent.slice(0,-1))
                    if(prizma.textContent=="undefined"){
                        prizma.innerHTML=""
                    }
                }if(prizma.textContent.length<=1) {prizma.innerHTML=prizma.textContent.slice(0,-1)}
                if (prizma.textContent.includes("⌫")){
                    prizma.innerHTML=prizma.textContent.slice(0,-1)
                }
            }
    }}
}else{prizma.textContent.execCommand("copy")}})//clik
document.addEventListener("keydown",function (e1){
    console.log(e1)
    if(prizma.textContent.includes("undefined")) {prizma.innerHTML=""}
    if (e1.key>=0 && e1.key<=9 && prizma.textContent.length<27){
        prizma.innerHTML=prizma.innerHTML=(prizma.textContent + e1.key).trim()
    }
    if (e1.key=="+" || e1.key=="-" ||e1.key=="/" || e1.key=="*" ){
        if(prizma.textContent.includes("undefined")) {prizma.innerHTML=""}
        if (prizma.textContent.length<27){
        prizma.innerHTML=prizma.innerHTMl=(prizma.textContent + e1.key).trim()}
    }
    if(e1.key=="="){
        if(prizma.textContent.includes("undefined")) {prizma.innerHTML=""}
        prizma.innerHTML=(prizma.textContent + e1.key).trim()+eval(prizma.textContent)
    }
    if (e1.key=="Backspace"){
        prizma.innerHTML=prizma.textContent.slice(0,-1)
        if (prizma.textContent.includes("=")){
            prizma.innerHTML=""
        }
    }
    if (e1.key=="c"){
        prizma.textContent.select().execCommand("copy")
        console.log("test")
    }
})//key

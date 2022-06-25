document.addEventListener("DOMContentLoaded",alert("Hello, welcome to makaveli homes"))

let submit=document.querySelector("#submit")
let input=document.querySelector("#input")

submit.addEventListener("click",function greetings(){
    greet.innerHTML="Hello "  + input.value + ", we are you chose us"
    greet.style.color= "#FFCC70 "
})
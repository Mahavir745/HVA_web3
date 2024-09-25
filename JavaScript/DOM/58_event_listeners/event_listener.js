let btn = document.querySelector("button")

btn.addEventListener("click",()=>{
  console.log("Button Click Event Executed")
})


let div_hover = document.querySelector("div")

div_hover.addEventListener("mouseover" ,()=>{
  console.log("Mouseover event on div executed")
})


let inputValue = document.querySelector("input")

inputValue.addEventListener("input", (e)=>{
  console.log(e.target.value)
})
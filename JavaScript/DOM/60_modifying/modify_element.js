let btn = document.querySelector("button");

btn.addEventListener("click",()=>{
  let para = document.querySelector("p");
  para.textContent = "Text has been changed!"
})

let div = document.querySelector("div");

div.addEventListener("mouseover", ()=>{
  div.style.cssText="background-color:yellow;color:blue;"

})


let btn2 = document.querySelector("#btn2")

btn2.addEventListener("click",()=>{
  let emptyDiv = document.querySelector("#htmlContent")
  emptyDiv.innerHTML = `
  <h1>Mahavir Kumar Mahato</h1>
  <p>Hello everyone, how are you?</p>
  `
})


let btn3 = document.querySelector("#btn3")

btn3.addEventListener("click",()=>{
  let para3 = document.querySelector(".btn3_para")

  para3.classList.toggle("btn3_para_none")
})
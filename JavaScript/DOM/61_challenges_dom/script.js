
let submit_btn = document.querySelector("#submit_btn")

submit_btn.addEventListener("click",(e)=>{
  e.preventDefault()
  console.log("Form submitted")
})


let allDiv = document.querySelectorAll("div")

allDiv.forEach((ele)=>{
  ele.addEventListener("click",()=>{
    ele.classList.toggle("bg_change")
  })
})



let colorDiv = document.querySelector("#colorChanger")

let color = colorDiv.childNodes
color.forEach((ele)=>{
  ele.addEventListener("click",()=>{
    if(ele.textContent == 'Red'){
      colorDiv.style.backgroundColor = "red"
    }
    else if(ele.textContent=="Yellow"){
      colorDiv.style.backgroundColor = "yellow"
    }
    else if(ele.textContent=="Blue"){
      colorDiv.style.backgroundColor = "blue"
    }
    else if(ele.textContent=="Green"){
      colorDiv.style.backgroundColor = "green"
    }
    
  })
})
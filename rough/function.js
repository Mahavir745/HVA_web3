// function sum(){
//   console.log(4+5)
// }

// sum();


// function sum(a,b){
//   return a+b
// }

// let value = sum(3,4)
// console.log(value)

// let sum = (a,b)=>{
//   return a+b
// }

// console.log(sum(3,4))

//! IIFE : Immeditally Invoke function excution.

// (()=> console.log("first"))()


//! high order function:

// function diff(a,b,add){

//   let c = 9
//   let sum = a+b


//   add(sum,c)
// }


// function add(a,b){
//   console.log(a+b)
// }

// diff(4,5,add)



// let object = {
//   name: "mahavir",
//   class: 12
// };

// object.greet = function() {
//   return `Hellbo, my name is ${this.name} and I am in class ${this.class}.`;
// };

// console.log(object); 


// alert("this is an alert")
// console.log("hello")

let btn = document.querySelector("#btn")

btn.addEventListener("click",()=>{
  console.log("clicked")
})

setTimeout(()=>{
  console.log("another one")
},4000)


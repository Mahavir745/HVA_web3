const myDiv = document.getElementById("myDiv")
const myClass = document.getElementsByClassName("myClass")

//todo: myClass store all values on the form of an array,
//todo: It's means we can't access it value directly by calling myClass
//todo: we should have to put the index number of myClass array


console.log(myDiv.textContent)
console.log(myClass[0].textContent)
console.log(myClass[1].textContent)


let paraContainer = document.getElementsByTagName("p")
console.log(paraContainer[2].textContent)

//todo: same reason behind this this paraContainer is also become an array


let highlight = document.querySelectorAll(".highlight")

console.log(highlight[1].textContent)


let span = document.querySelector(".highlight")
console.log(span.textContent)
const myDiv = document.getElementById("myDiv");
const myClass = document.getElementsByClassName("myClass");


console.log(myDiv.textContent);


Array.from(myClass).forEach((element, index) => {
  console.log(`myClass[${index}]: ${element.textContent}`);
});


let paraContainer = document.getElementsByTagName("p");


Array.from(paraContainer).forEach((para, index) => {
  console.log(`Paragraph ${index}: ${para.textContent}`);
});


let highlight = document.querySelectorAll(".highlight");


highlight.forEach((element, index) => {
  console.log(`Highlight ${index}: ${element.textContent}`);
});


let span = document.querySelector(".highlight");
console.log(`First Highlight Span: ${span.textContent}`);

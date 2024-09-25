const list1 = document.getElementById('list1');
let firstElement = list1.firstElementChild;

while (firstElement) {
    console.log(firstElement.textContent);
    firstElement = firstElement.nextElementSibling;
}


// second list

const list2 = document.getElementById("list2");
let lastElement = list2.lastElementChild;

while(lastElement){
  console.log(lastElement.textContent)
  lastElement = lastElement.previousElementSibling;
}


// thired list

const list3 = document.getElementById("list3")
let elementChild = list3.children;

for(let i of elementChild){
  console.log(i.textContent)
}
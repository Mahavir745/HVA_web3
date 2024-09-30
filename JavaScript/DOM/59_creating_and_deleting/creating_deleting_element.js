let addButton = document.querySelector("#addButton")

let i = 1

function addListItem(){

  let list = document.querySelector("#list")
  let li = document.createElement("li")
  list.append(li)
  li.textContent = `New Item ${i++}`
};

addButton.addEventListener("click", addListItem);

 

let removeButton = document.querySelector("#removeButton")

function removeButtonItem(){

  let list = document.querySelector("#list")
  list.removeChild(list.lastElementChild) //! List ke last element ko target krne ke liye lastElementChild
  i--
   
};

removeButton.addEventListener("click",removeButtonItem)
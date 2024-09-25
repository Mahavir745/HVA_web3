let inventory = [
  {id:1,title:"The Midnight Library",author:"Matt Haig",price:350,quantity: 3},
  {id:2, title:"Where the Crawdads Sing", author:"Delia Owens",price:342, quantity: 2},
  {id:3, title:"Educated", author:"Tara Westover",price:420,quantity:4},
  {id:4,title:"Project Hail Mary",author: "Andy Weir", price:335,quantity:2},
  {id:5, title:"The Vanishing Half",author:"Brit Bennett",price:360,quantity:3}
]

class Book{
  constructor(id,title,author,price,quantity){
    this.id = id;
    this.title= title;
    this.author = author;
    this.price = price;
    this.quantity = quantity;
  }
}

function displayBooks(arr){
  arr.forEach((ele)=>{
    console.log(`${ele.title} - ${ele.author} (${ele.price})`);
    
  })
}

displayBooks(inventory);

function addBook(id,title,author,price,quantity){
 let data = new Book(id,title,author,price,quantity)
  inventory.push(data)
}

addBook(6,"Way of my life","mahavir",450, 2)

console.log(inventory);



function updateBook(id,quantity){
let found = inventory.find((ele)=>{
  return ele.id ===id
})

if(found){
  found.quantity = quantity
}
}

updateBook(6,8);
console.log(inventory)



//todo: update information by using map

function updateBookWithMap(id,quantity){
  inventory = inventory.map((ele)=>{
    if(ele.id === id){
      ele.quantity = quantity
    }
    return ele
  })
}

// updateBookWithMap(6,3)

// console.log(inventory)


//todo: Define the removeBook function:

let newarr = []
function removeBook(id){
  let find = inventory.filter((ele)=>{
    return ele.id!==id
  })
  newarr.push(find)
}

removeBook(6);
console.log(newarr);
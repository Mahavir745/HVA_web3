

class Product {
  
  constructor(id,name,price,quantity){
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}


let inventory = [
  new Product(1,"mouse",250, 4),
  new Product(2, "keyboard", 350, 5),
  new Product(3, "Ssd", 2600, 2),
  new Product(4,"speaker", 3300, 3)
]



inventory.forEach((ele)=>{
  console.log(`${ele.name} - ${ele.price}(${ele.quantity})`);
  
})

function addProduct(id,name,price,quantity){
   let newadd = new Product(id,name,price,quantity)
   inventory.push(newadd)
}



addProduct(5,"touchpen",200, 3)
// console.log(inventory);


//todo: Define the update Product Function:

function updateProduct(productId,quantity){
  const product = inventory.find((ele)=>{
    return ele.id === productId
    
  })
  
  if(product){
    product.quantity = quantity;
  }
}

updateProduct(2, 6)
console.log(inventory);


//todo: update product by using map
function updateProductWithMap(productId, quantity) {

  inventory = inventory.map((ele)=>{
    if(ele.id === productId){
      ele.quantity = quantity
    }
    return ele
  });
}

updateProductWithMap(2,15)

console.log(inventory);


// //todo: Define the remove Product Function:

// function removeProduct(productId){
//   inventory = inventory.filter((ele)=>{
//    return ele.id !== productId
//   })
// }

// removeProduct(3)


// console.log(inventory);
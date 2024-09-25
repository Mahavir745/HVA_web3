//todo: Define the displayProducts function

let products = [
  {id: 1,name:"ladies Finger",price: 40,category:"vegetable"},
  {id: 2,name:"cabbage",price: 72, category: "vegetable"},
  {id: 3,name: "mango", price: 1200, category:"fruit"},
  {id: 4,name: "almonds",price: 250, category: "Dry fruit"},
  {id: 5,name: "kismish", price: 280, category: "Dry fruit" }
]



//todo: calculate and display products with tax:

function displayProducts(products){
  products.forEach((ele)=>{
    console.log(`${ele.name} - Rs ${ele.price}`);
    
  })
}
displayProducts(products)

console.log("\n");


//todo: calculate and display products with tax:
//! Error generated if I followed the instruction:

let productsWithTax = products.map((ele)=>({
    id: ele.id,
    name : ele.name,
    category: ele.category,
    price: ele.price,
    productsWithTax: ele.price + ele.price*0.1
}))



console.log(productsWithTax);

displayProducts(productsWithTax)



// //todo: filter and display food products:

// let foodProducts = productsWithTax.filter((ele)=>{
//   return ele.category =='Dry fruit'
// })

// console.log(foodProducts);

// //todo: find affordable products:

// let affordableProducts = productsWithTax.filter((ele)=>{
//   if(ele.price <=300){
//       return `${ele.name} - Rs${ele.price}`
//   }
// })

// console.log(affordableProducts);

// //todo: calculate total price:
// let sum = 0
// let totalPrice = productsWithTax.map((ele)=>{
//   sum+=ele.price
// })

// console.log(sum);

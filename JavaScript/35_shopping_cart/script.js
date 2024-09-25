//todo: define the array of cart items:

let cart = [
  {name: "mix fruit jam", price:120, quantity: 2},
  {name: "bread" ,price: 40, quantity: 1},
  {name: "milk", price: 50, quantity: 2},
  {name: "eggs", price: 7, quantity: 30}
]

function calculateTotalPrice(cart){
  let totalPrice = 0
  cart.forEach((ele)=>{
    totalPrice = totalPrice+ele.quantity*ele.price;
  })

  return `Total: Rupee ${totalPrice}`
}

console.log(calculateTotalPrice(cart));

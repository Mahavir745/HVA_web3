let products = [
  { id: 1, name: "ladies Finger", price: 40, category: "vegetable" },
  { id: 2, name: "cabbage", price: 72, category: "vegetable" },
  { id: 3, name: "mango", price: 1200, category: "fruit" },
  { id: 4, name: "almonds", price: 250, category: "Dry fruit" },
  { id: 5, name: "kismish", price: 280, category: "Dry fruit" }
];

// Function to display products
function displayProducts(products, useTaxPrice = false) {
  products.forEach((ele) => {
    const priceToDisplay = useTaxPrice ? ele.priceWithTax : ele.price;
    console.log(`${ele.name} - Rs ${priceToDisplay.toFixed(2)}`);
  });
}

// Calculate products with tax
let productsWithTax = products.map((ele) => ({
  id: ele.id,
  name: ele.name,
  category: ele.category,
  price: ele.price,
  priceWithTax: (ele.price + ele.price * 0.1).toFixed(2) // 10% tax formatted to two decimal places
}));

console.log("Products with Tax:");
displayProducts(productsWithTax, true);

console.log("\n");

// Filter and display food products (adjust category if needed)
let foodProducts = productsWithTax.filter((ele) => ele.category === 'Dry fruit');
console.log("Food Products (Dry Fruit):");
displayProducts(foodProducts, true);

console.log("\n");

// Find affordable products
let affordableProducts = productsWithTax.filter((ele) => ele.priceWithTax <= 300);
console.log("Affordable Products:");
displayProducts(affordableProducts, true);

console.log("\n");

// Calculate total price
let totalPrice = 0;
productsWithTax.forEach((ele) => {
  totalPrice += parseFloat(ele.priceWithTax);
});
console.log(`Total Price of Products with Tax: Rs ${totalPrice.toFixed(2)}`);

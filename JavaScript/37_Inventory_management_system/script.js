class Product {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

let inventory = [
  new Product(1, "mouse", 250, 4),
  new Product(2, "keyboard", 350, 5),
  new Product(3, "Ssd", 2600, 2),
  new Product(4, "speaker", 3300, 3),
];


function displayProducts() {
  inventory.forEach((ele) => {
    console.log(`${ele.name} - Rs ${ele.price} (${ele.quantity})`);
  });
}

displayProducts();

function addProduct(id, name, price, quantity) {
  const newProduct = new Product(id, name, price, quantity);
  inventory.push(newProduct);
  return inventory;
}


addProduct(5, "touchpen", 200, 3);
displayProducts();


function updateProduct(productId, quantity) {
  const product = inventory.find((ele) => ele.id === productId);
  
  if (product) {
    product.quantity = quantity;
  } else {
    console.error(`Product with ID ${productId} not found.`);
  }
}


updateProduct(2, 6);
displayProducts();


function updateProductWithMap(productId, quantity) {
  inventory = inventory.map((ele) => {
    if (ele.id === productId) {
      ele.quantity = quantity;
    }
    return ele;
  });
}


updateProductWithMap(2, 15);
displayProducts();


function removeProduct(productId) {
  const initialLength = inventory.length;
  inventory = inventory.filter((ele) => ele.id !== productId);
  
  if (inventory.length === initialLength) {
    console.error(`Product with ID ${productId} not found for removal.`);
  }
}


removeProduct(3);
displayProducts();


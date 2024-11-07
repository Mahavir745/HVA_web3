let inventory = [
  {id: 1, title: "The Midnight Library", author: "Matt Haig", price: 350, quantity: 3},
  {id: 2, title: "Where the Crawdads Sing", author: "Delia Owens", price: 342, quantity: 2},
  {id: 3, title: "Educated", author: "Tara Westover", price: 420, quantity: 4},
  {id: 4, title: "Project Hail Mary", author: "Andy Weir", price: 335, quantity: 2},
  {id: 5, title: "The Vanishing Half", author: "Brit Bennett", price: 360, quantity: 3}
];

class Book {
  constructor(id, title, author, price, quantity) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.price = price;
    this.quantity = quantity;
  }
}

// Display all books
function displayBooks() {
  inventory.forEach((ele) => {
    console.log(`${ele.title} - ${ele.author} (${ele.price})`);
  });
}

displayBooks();

function addBook(id, title, author, price, quantity) {
  let data = new Book(id, title, author, price, quantity);
  inventory.push(data);
  console.log(`Added Book: ${title}`);
}

addBook(6, "Way of my life", "Mahavir", 450, 2);
console.log(inventory);

// Update book quantity
function updateBook(id, quantity) {
  let found = inventory.find((ele) => ele.id === id);
  if (found) {
    found.quantity = quantity;
    console.log(`Updated Book ID ${id} quantity to ${quantity}`);
  }
}

updateBook(6, 8);
console.log(inventory);

// Update information using map
function updateBookWithMap(id, quantity) {
  inventory = inventory.map((ele) => {
    if (ele.id === id) {
      return new Book(ele.id, ele.title, ele.author, ele.price, quantity); // Create a new Book object
    }
    return ele;
  });
  console.log(`Updated Book ID ${id} quantity to ${quantity}`);
}

updateBookWithMap(6, 3);
console.log(inventory);

// Remove book
function removeBook(id) {
  inventory = inventory.filter((ele) => ele.id !== id);
  console.log(`Removed Book ID ${id}`);
}

removeBook(6);
console.log(inventory);

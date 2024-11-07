
let expenses = [
  {id: 1, name: "lipstick", amount: 250, date: '2024-02-08'},
  {id: 2, name: "eyeliner", amount: 150, date: '2024-03-08'},
  {id: 3, name: "Mashkara", amount: 120, date: '2024-02-08'},
  {id: 4, name: "kajal", amount: 299, date: '2024-02-08'}
];

class Expense {
  constructor(id, name, amount, date) {
    this.id = id;
    this.name = name;
    this.amount = amount;
    this.date = date;
  }
}

function displayExpenses(expenses) {
  expenses.forEach((ele) => {
    console.log(`${ele.name} - ${ele.amount} (${ele.date})`);
  });
}


console.log("Initial Expenses:");
displayExpenses(expenses);


function addExpense(id, name, amount, date) {
  let add = new Expense(id, name, amount, date);
  expenses.push(add);
  console.log(`Added Expense: ${name}`);
  displayExpenses(expenses);
}
addExpense(5, "makeupKit", 3400, "2024-02-08");


function updateExpense(id, amount) {
  let product = expenses.find((ele) => ele.id === id);
  if (product) {
    product.amount = amount;
    console.log(`Updated Expense ID ${id} to amount ${amount}`);
  } else {
    console.log(`Expense ID ${id} not found.`);
  }
  displayExpenses(expenses);
}

updateExpense(1, 400);


function updateExpenseWithMap(productId, amount) {
  expenses = expenses.map((ele) => {
    if (ele.id === productId) {
      return new Expense(ele.id, ele.name, amount, ele.date);
    }
    return ele;
  });
  console.log(`Updated Expense ID ${productId} to amount ${amount}`);
  displayExpenses(expenses);
}

updateExpenseWithMap(1, 500);


function removeExpense(id) {
  expenses = expenses.filter((ele) => ele.id !== id);
  console.log(`Removed Expense ID ${id}`);
  displayExpenses(expenses);
}

removeExpense(5);

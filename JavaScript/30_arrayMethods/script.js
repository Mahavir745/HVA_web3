// Define and initialize the Array:
let numbers = [1, 2, 3, 4, 5, 6, 7];

// Iterate and log using forEach()
numbers.forEach((ele) => {
  console.log(ele);
});

// Log each element multiplied by 2 using forEach()
numbers.forEach((ele) => {
  console.log(ele * 2);
});

// Iterate and create a new modified array using map():
let squareNumbers = numbers.map((el) => {
  return el * el; // Squaring each element
});
console.log("Squared Numbers:", squareNumbers); 


squareNumbers.map((ele) => {
  console.log(ele);
});

// Iterate and create a new filtered array using filter():
let evenNumbers = numbers.filter((ele) => {
  return ele % 2 === 0; 
});
console.log("Even Numbers:", evenNumbers); 

// Iterate and log each element using filter()
evenNumbers.forEach((even) => {
  console.log(even);
});
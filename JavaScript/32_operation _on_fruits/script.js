let fruits = ['apple', "banana", "cherry", "date", "pineapple"];


fruits.forEach(function(ele) {
  let result = ele.toUpperCase();
  console.log(result);
});

fruits.forEach((ele) => {
  let result = ele.toUpperCase();
  console.log(result);
});

// Calculate total characters using forEach()

let totalCharacters = 0; 
fruits.forEach(function(ele) {
  totalCharacters += ele.length; 
  console.log(`${ele} : ${ele.length}`);
});
console.log(`Total characters across all fruits: ${totalCharacters}`);

// Create a new modified array using map()

let reversedFruits = fruits.map(function(ele) {
  return ele.split("").reverse().join("");
});
console.log(reversedFruits);

reversedFruits = fruits.map((ele) => {
  return ele.split("").reverse().join("");
});
console.log(reversedFruits);

// Create a new filtered array using filter()

let longFruits = fruits.filter(function(ele) {
  return ele.length > 5; 
});
console.log(longFruits);

longFruits = fruits.filter((ele) => {
  return ele.length > 5; 
});
console.log(longFruits);

// Create a new filtered and modified array using filter() and map()

let fruitIna = fruits.filter(function(ele) {
  return ele.includes('a');
});

let aFruitsUpper = fruitIna.map(function(ele) {
  return ele.toUpperCase();
});

console.log(aFruitsUpper);

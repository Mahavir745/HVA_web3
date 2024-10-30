// Define and initialize the array
let temperatures = [-3, 14, 22, 5, -10, 37];

// Log temperatures using forEach
temperatures.forEach((temp) => {
  console.log(temp);
});

// Convert to Fahrenheit and log the results
temperatures.forEach((ele) => {
  let f = (ele * 9/5) + 32; 
  console.log(f);
});

// Use map to create a new array of temperatures in Fahrenheit
let temperaturesInFahrenheit = temperatures.map((ele) => {
  return (ele * 9/5) + 32;
});

console.log(temperaturesInFahrenheit);

// Use filter to create a new array of below freezing temperatures
let belowFreezing = temperatures.filter((ele) => {
  return ele < 0; 
});

console.log(belowFreezing);

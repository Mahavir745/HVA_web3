// //todo: define and initialize the array:
let temperatures = [-3,14,22,5,-10,37]

// temperatures.forEach(function(temp){
//   console.log(temp);
// })

// temperatures.forEach((temp)=>{
//   console.log(temp);
// })

// //* convert

// temperatures.forEach(function(ele){
//   f = (ele* 9/5)+32
//   console.log(f);
// })

// temperatures.forEach((ele)=>{
//   f = (ele* 9/5)+32
//   console.log(f);
// })

//todo: iterate and create a new modified array using map();

// let temperaturesInFahrenheit = temperatures.map(function(ele){
//   return (ele* 9/5)+32;
// })

// console.log(temperaturesInFahrenheit);

let temperaturesInFahrenheit = temperatures.map((ele)=>{
  return (ele* 9/5)+32;
})

console.log(temperaturesInFahrenheit);

//todo: iterate and create a new filtered array using filter()

let belowFreezing = [-1,0,23,-4,35,-1.0]
// let result = belowFreezing.filter(function(ele){
//   return ele < 0;
// })
// console.log(result);

// let result = belowFreezing.filter((ele)=>{
//   return ele < 0;
// })

// console.log(result);
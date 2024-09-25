let fruits = ['apple',"banana","cherry","date","pineapple"]

// fruits.forEach(function(ele){
//   let capital = ele[0].toUpperCase()
//   let lower = ele[0].toLocaleLowerCase()
//   let result = ele.replace(lower,capital)
//   console.log(result);
// })

// fruits.forEach((ele)=>{
//   let capital = ele[0].toUpperCase()
//   let lower = ele[0].toLocaleLowerCase()
//   let result = ele.replace(lower,capital)
//   console.log(result);
// })

//todo: calculate total characters using forEach()

// fruits.forEach(function(ele){
// let totalCharacters = 0

//   for(let i of ele){
//     totalCharacters++
//   }
//   console.log(`${ele} : ${totalCharacters}`);
// })

//todo: Iterate and Create a new modified array using map():

// let reversedFruits = fruits.map(function(ele){
//   let reverse = ele.split("").reverse().join("")
//   return reverse
// })
// console.log(reversedFruits);

// let reversedFruits = fruits.map((ele)=>{
//   let reverse = ele.split("").reverse().join("")
//   return reverse
// })
// console.log(reversedFruits);

//todo: iterate and create a new filtered array using filter():

// let longFruits = fruits.filter(function(ele){
//     let length = ele.length
//     if(length>5){
//       return ele
//     }
// })

// console.log(longFruits);


// let longFruits = fruits.filter((ele)=>{
//   let length = ele.length
//   if(length>5){
//     return ele
//   }
// })

// console.log(longFruits);

//todo: create a new filtered and modified array using filter() and map()

let fruitIna = fruits.filter(function(ele){
  if(ele.includes('a')) return ele;
})

let aFruitsUpper = fruitIna.map(function(ele){
  console.log(ele.toUpperCase());
})

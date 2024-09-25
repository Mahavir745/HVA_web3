// //todo: define and log the colors Array:

let colors = ["red","blue","yellow","pink","aqua","coral"]
// console.log(colors[0]);

// //todo: modify and Add color elements:
// colors[1]="yellow"
// console.log(colors[1]);

// //* two ways to add new element in an array.
// //* one:
// colors[colors.length]="white"
// console.log(colors);

// //* another:
// colors.push("skyblue")
// console.log(colors);

// //todo: Iterate using Loops over the colors Array:

// //* using for loop
// console.log("using for loop\n ");

// for(let i= 0 ; i<colors.length; i++){
//   console.log(colors[i]);
// }

// //* using while loop
// console.log("using while loop\n ");

// let i=0

// while(i<colors.length){
//   console.log(colors[i]);
//   i++
// }

// //* using for of loop
// console.log("using for of loop\n ");
// for (let i of colors) {
//   console.log(i);
// }

// //todo: check array properties:

// console.log(typeof colors);
// console.log(colors.length);

// //todo: Array Methods:
// colors.push("lightcoral")
// console.log(colors);

// colors.pop()
// console.log(colors);

// console.log(colors.indexOf("pink"));

//todo: Add and iterate Over Properties:

colors.owener = "Mahavir kumar Mahato"
console.log(colors);

for(let i in colors){
  console.log(`${i}: value:${colors[i]}`);
}
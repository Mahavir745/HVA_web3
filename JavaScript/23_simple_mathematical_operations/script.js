//todo: Define callback functions:

function doubleNumber(num){
  return num * 2
}
// console.log(doubleNumber(4));

function squareNumber(num){
  return num*num
}
// console.log(squareNumber(6));

function incrementNumber(num){
  return num+=1
}
// console.log(incrementNumber(7));


//todo: Define performOperation function:

function performOperation(num,operator){
   return operator(num)
}

console.log(performOperation(5,doubleNumber));

console.log(performOperation(5,squareNumber));

console.log(performOperation(5,incrementNumber));
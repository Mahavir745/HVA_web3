// todo: define callback functions:

function addNumbers(num1,num2){
  return num1+num2
}

function multiplyNumbers(num1,num2){
  return num1*num2
}

function subtractNumbers(num1,num2){
  return num2 - num1
}

function divideNumbers(num1,num2){
  return num1/num2
}

// todo: define performArithmetic Function:

function performArithmetic(num1,num2,operation){
  return operation(num1,num2)
}

// todo: Call performArithmetic with callback functions:

console.log(performArithmetic(5,3,addNumbers));
console.log(performArithmetic(5,3,multiplyNumbers));
console.log(performArithmetic(5,3,subtractNumbers));
console.log(performArithmetic(5,3,divideNumbers));
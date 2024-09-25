//todo: Define Higher Order Function:

function higherOrderFunction(num,callback){
  callback(num)
}

// todo: Define Callback Function and Call Higher Order Function:

function callbackFunction(number){
  console.log(number);
}

higherOrderFunction(5,callbackFunction)



// todo: Call Higher Order Function With A Function Expression As Callback:

let callback = function callbackFunction(number){
  console.log(number);
}

higherOrderFunction(10, callback)

// todo: Callback to log square of the number

let callback2 = function callbackFunction(number){
  console.log(number*number);
}

higherOrderFunction(4,callback2)

// todo: Callback to log sum of two numbers:

function newHigherOrderFunction(num1,num2,callback){
  callback(num1,num2 )
}

let sumtwonumber = function callback(num1,num2){
  console.log(num1 + num2);
}

newHigherOrderFunction(3,7,sumtwonumber)
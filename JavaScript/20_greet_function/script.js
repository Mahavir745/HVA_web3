// todo: greet function:

function greet(name){
  return "Hello, " + name+'!'
}

console.log(greet("Mahavir"));

// todo: greetDefault

function greetDefault(name="Guest!"){
  return "Hello, "+name
}
console.log(greetDefault());

// todo: Rewrite Greet as a Function Expression:

let greetFunction= function greet(name){
  return "Hello "+ name+"!"
}

console.log(greetFunction("I  Adore You Mahavir"));

// todo: Rewrite Greet as an Arrow Function:

let getArrow = (name)=>{
  return name
}

console.log(getArrow("mahavir"));
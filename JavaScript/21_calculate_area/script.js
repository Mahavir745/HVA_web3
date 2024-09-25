//todo: Calculate Area:

function calculateArea (width,height){
  return width * height
}

console.log(calculateArea(5,10));

// todo: Modify calculate area function with default values:

function calculateAreaWithDefaults(width=1,height=1){
  return width*height
}

console.log(calculateAreaWithDefaults());

// todo: Rewrite calculate area as a function expression:

let calculateAreaFunction = function calculateArea(width,height){
    return width*height
}

console.log(calculateAreaFunction(6,7));

// todo: Rewrite calculate area as an arrow function:

let calculateAreaArrow = (width,height)=>{
  return width*height
}

console.log(calculateAreaArrow(5,10));
//todo: define the array of people:

let people = [
  {name:"mahavir",age: 19},
  {name:"Edi",age:23},
  {name: "ramesh", age:21},
  {name: "kumar", age: 19}
]


function calculateAverageAge(people){
  let sumAges = 0
  people.forEach((ele)=>{
    sumAges += ele.age
  })

  let average = sumAges/people.length;
  return average
}

console.log(calculateAverageAge(people));

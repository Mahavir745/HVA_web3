// //todo: define and populate the student object

// let student = {}

// student.name = "Mahavir"
// student.email = "mahavir777kumar@gmail.com"
// student.age = 19

// console.log(student);

// //todo: update the student object

// student["age"] = 10
// console.log(student.age);

// //todo: Add method and nested object to student

//   student.greet = function(){
//     return "Hello "+student.name+ "!"
//   }

//   console.log(student.greet());

//   student.address = {country:"India",
//                     age: 19,
//                     pin_code: 828104}

//   console.log(student);


//   //? update pincode:
//   student.address["pin_code"] = 1234567

//   console.log(student);



// //todo: create and populate the friend object:

// let friend = {
//   name : "Mahavir",
//   email: "mahavir777kumar@gmail.com",
//   age: 19,
//   address: {
//     country: "India",
//     city: "dhanbad",
//     pin_code: 828105
//   },
//   greet: function(){
//     return "Hello I Adore you "+ friend.name + "!";
//   }
// }

// console.log(friend.greet());
// console.log(friend);


// //todo: create and populate the topper object

// let topper = {
//   name : "Mahavir",
//   email: "mahavir777kumar@gmail.com",
//   age: 19,
//   address: {
//     country: "India",
//     city: "dhanbad",
//     pin_code: 828105
//   },
//   greet: function(){
//     return "Topper: "+ friend.name + "!";
//   }
// }

// console.log(topper.greet());
// console.log(topper);

// todo: Define and Use the student class:

class Student {

  constructor(name,email,age,country,city,pin_code){
     this.name = name;
     this.email = email;
     this.age = age;
     this.address = {
      country: country,
      city: city,
      pin_code:pin_code
     };
  }

  greet(){
    return "hello "+this.name;
  }
  getFullAddress(){
    // const {country,city,pin_code} = this.address
    const country = this.address.country;
    const city = this.address.city;
    const pin_code = this.address.pin_code;
    
    return `country: ${country} city: ${city} pin code: ${pin_code}`
  }
}

const student = new Student("mahavir","@kumar",19,"india","dhanbad",828105)
// console.log(student);
// console.log(student.greet());
// console.log(student.name);
// console.log(student.getFullAddress());


//todo: Create and log Student Object:- store an another student data:

const student2= new Student("kumar","I@veer",19,"India","Jharkhand",828104)
// console.log(student);

//todo: Call the greet method and getfulladress method on student objects:

console.log(student2.greet());
console.log(student2.getFullAddress());
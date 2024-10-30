
let student = {};

student.name = "Mahavir";
student.email = "mahavir777kumar@gmail.com";
student.age = 19;

console.log(student);


student.greet = function() {
  console.log("Hello " + student.name + "!");
};

student.address = {
  country: "India",
  city: "Dhanbad", 
  pin_code: 828104,
};

student.greet(); 
console.log(student);

// Update pincode:
student.address["pin_code"] = 1234567;
console.log(student);


let friend = {
  name: "Ravi",
  email: "ravi@example.com",
  age: 19,
  address: {
    country: "India",
    city: "Dhanbad",
    pin_code: 828105,
  },
  greet: function() {
    console.log("Hello, I adore you " + this.name + "!");
  },
};

friend.greet();
console.log(friend);


let topper = {
  name: "Amit",
  email: "amit@example.com",
  age: 19,
  address: {
    country: "India",
    city: "Dhanbad",
    pin_code: 828106,
  },
  greet: function() {
    console.log("Topper: " + this.name + "!"); 
  },
};

topper.greet(); 
console.log(topper);

// Define and Use the Student class:
class Student {
  constructor(name, email, age, country, city, pin_code) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.address = {
      country: country,
      city: city,
      pin_code: pin_code,
    };
    console.log(`Created student: ${this.name}`); 
  }

  greet() {
    console.log("Hello " + this.name + "!");
  }

  getFullAddress() {
    const { country, city, pin_code } = this.address;
    return `Country: ${country}, City: ${city}, Pin Code: ${pin_code}`;
  }
}


const student1 = new Student("Mahavir", "mahavir@example.com", 19, "India", "Dhanbad", 828105);
student1.greet();
console.log(student1.getFullAddress());


const student2 = new Student("Kumar", "kumar@example.com", 19, "India", "Jharkhand", 828104);
student2.greet();
console.log(student2.getFullAddress());

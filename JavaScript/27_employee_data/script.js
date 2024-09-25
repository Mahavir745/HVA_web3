//todo: Define the Employee Class:

class Employee{

  constructor(name,email,age,department,position,salary){
    this.name = name;
    this.email = email;
    this.age = age;
    this.department = department;
    this.position = position;
    this.salary = `$${salary}`;
  }

  introduce(){
    return `Hello, I am ${this.name}, ${this.position}`
  }
  
  displaySalary(){
    return `Salary: ${this.salary} `
  }
}


//todo: create and log emplyoee Objects:

let newEmployee = new Employee('Mahavir','mahavir777kumar@gmail.com',19,"Software Developer","Frontend-Developer",5000)
console.log(newEmployee);

let manager = new Employee('Mahavir Kumar Mahato',"kumarmahavir500@gmail.com",21, "Hiring","Manager", 15000)
console.log(manager);

//todo: call methods on employee objects:


console.log(newEmployee.introduce());
console.log(newEmployee.displaySalary());

//* manager

console.log(manager.introduce());
console.log(manager.displaySalary());
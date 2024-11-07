let tasks = [
  {id: 1, description: "wrap up whole stuff", dueDate: "14-08-2024", status: "running"},
  {id: 2, description: "preparing for leave", dueDate: "14-08-2024", status: "pending"}
];

class Task {
  constructor(id, description, dueDate, status) {
    this.id = id;
    this.description = description;
    this.dueDate = dueDate;
    this.status = status;
  }
}


function displayTasks(arr) {
  arr.forEach((ele) => {
    console.log(`${ele.description} - ${ele.dueDate} (${ele.status})`);
  });
}

displayTasks(tasks);

function addTask(id, description, dueDate, status) {
  let data = new Task(id, description, dueDate, status);
  tasks.push(data);
}

addTask(3, "get ready", "12-08-2024", "pending");
console.log(tasks);


function updateTask(id, status) {
  let task = tasks.find((ele) => ele.id === id);
  if (task) {
    task.status = status;
  }
}

updateTask(2, "success");
console.log(tasks);


function updateTaskWithMap(id, status) {
  tasks = tasks.map((ele) => {
    if (ele.id === id) {
      return new Task(ele.id, ele.description, ele.dueDate, status); 
    }
    return ele;
  });
}

updateTaskWithMap(3, "success");
console.log(tasks);


function removeTask(id) {
  tasks = tasks.filter((ele) => ele.id !== id);
}

removeTask(1);
console.log(tasks);

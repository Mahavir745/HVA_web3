let tasks = [
  {id:1,description:"wrap up whole stuff",dueDate: "14-08-2024",status:"running"},
  {id:2,description:"preparing for leave",dueDate:"14-08-2024",status:"pending"}
]

class Task{
  constructor(id,description,dueDate,status){
    this.id = id,
    this.description = description,
    this.dueDate = dueDate,
    this.status = status
  }
}


function displayTasks(arr){
  arr.forEach((ele)=>{
    console.log(ele)
  })
}

displayTasks(tasks)

function addTask(id,description,dueDate,status){
 let data = new Task(id,description,dueDate,status)
 tasks.push(data)
}

addTask(3,"get ready","12-08-2024","pending")
console.log(tasks);


//todo: update tasks

function updateTask(id,status){
  let task = tasks.find((ele)=>{
    return ele.id === id
  })
  if(task){
    task.status = status
  }
}

updateTask(2, "success");

console.log(tasks);


//todo: update by using map

function updateTaskWithMap(id,status){
  tasks = tasks.map((ele)=>{
    if(ele.id===id){
      ele.status = status
    }
  return ele

  })
}


updateTaskWithMap(3,"success")
console.log(tasks);


//todo: removetask function:

let newarr = []
function removeTask(id){
  let task = tasks.filter((ele)=>{
    return ele.id!==id
  })
  newarr.push(task)
}

removeTask(1)
console.log(newarr);

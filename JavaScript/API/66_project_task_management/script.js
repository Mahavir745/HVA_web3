const addTask = document.querySelector("#addTask");
const pendingContainer = document.querySelector("#pending_child1_items2");
const completeContainer = document.querySelector("#completed_task");

let allDetailsTask = [];

addTask.addEventListener("click", (e) => {
  e.preventDefault();

  const taskTitle = document.querySelector("#taskTitle");
  const dueDate = document.querySelector("#dueDate");
  const taskDetails = document.querySelector("#taskDetails");
  const priority = document.querySelector("#priority");

  let arrangeDate = dueDate.value.split("-").reverse().join("-");

  let idname = Date.now();
  let task = {
    title: taskTitle.value,
    date: arrangeDate,
    details: taskDetails.value,
    priority: priority.value,
    id: idname,
    status: "pending"
  };

  taskTitle.value = ""
  dueDate.value = ""
  taskDetails.value = ""
  priority.value = ""
  
  allDetailsTask.push(task);
  TaskAdded(task); 
});

const TaskAdded = (task) => {
  let taskContainer = document.createElement("div");
  taskContainer.classList.add("pendingChild");
  taskContainer.setAttribute("id", `${task.id}`);

  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let p4 = document.createElement("p");

  p1.classList.add("p1");
  p2.classList.add("p2");
  p3.classList.add("p3");
  p4.classList.add("p4");

  let element1 = document.createElement("div");
  element1.classList.add("element1");

  let element2 = document.createElement("div");
  element2.classList.add("element2");

  let label = document.createElement("label");
  label.textContent = "Mark as completed";

  let btn_done = document.createElement("button");
  btn_done.setAttribute("class", "taskcompleted");
  btn_done.setAttribute("id", `${task.id}`);

  let delete_btn = document.createElement("button");
  delete_btn.setAttribute("class", "delete_btn");
  delete_btn.setAttribute("id", `${task.id}`);
  delete_btn.innerHTML = "Delete";

  taskContainer.append(p1, p2, element1, element2);
  element1.append(p3, p4);
  element2.append(label, btn_done, delete_btn);

  p1.textContent = task.title;
  p2.textContent = task.details;
  p3.textContent = task.date;
  p4.textContent = task.priority;

  if (task.status === "pending") {
    pendingContainer.append(taskContainer);
  } else {
    completeContainer.append(taskContainer);
  }

//todo: complete Btn

  btn_done.addEventListener("click", (e) => {
    allDetailsTask.forEach((ele) => {
      let taskId = Number(ele.id);
      let btnId = Number(e.target.id);
      if (taskId === btnId) {
        ele.status = "completed";
        completeTasks(ele);
      }
    });
  });

//todo: delete Btn
  delete_btn.addEventListener("click", (e) => {
    allDetailsTask = allDetailsTask.filter((ele) => ele.id !== task.id);
    taskContainer.remove();
  });
};

const completeTasks = (task) => {
  const taskContainer = document.getElementById(task.id);
  if (taskContainer) {
    taskContainer.remove();
  }
  TaskAdded(task); 
};


// const filter1_submit = document.querySelector("#filter1_submit")

// filter1_submit.addEventListener("click",()=>{
//   const filter1_date = document.querySelector("#filter1_date").value
//   const filter1_medium = document.querySelector("#filter1_medium").value

//   let arrangeDate = filter1_date.split("-").reverse().join("-")

//   if(filter1_date != "" && filter1_medium != "none"){
//     completedTask.map((ele)=>{
//       let date = ele.children[2].children[0].innerText
//       let medium = ele.children[2].children[1].innerText

//       if(date === arrangeDate && medium === filter1_medium){
//         ele.style.display = "flex"
//       }
//       else{
//         ele.style.display = "none"
//       }
//     })
//   }
//   else if(filter1_date != ""){
//     completedTask.map((ele)=>{
//       let date = ele.children[2].children[0].innerText
//       if(date !== arrangeDate){
//         ele.style.display = "none"
//       }
//       else{
//         ele.style.display = "flex"
//       }
//     })
//   }
//   else if(filter1_medium != "none"){
//     completedTask.map((ele)=>{
//       let medium = ele.children[2].children[1].innerText
 
//       if(filter1_medium !== medium){
//        ele.style.display = "none"
//       }
//       else{
//        ele.style.display = "flex"
//       }
   
//      })
//   }
//   else{
//     completedTask.map((ele)=>{
//       ele.style.display = "flex"
//     })
//   }
// })


// const filter2_submit = document.querySelector("#filter2_submit")

// filter2_submit.addEventListener("click",()=>{
//   const filter2_date = document.querySelector("#filter2_date").value
//   const filter2_medium = document.querySelector("#filter2_medium").value
//   let arrangeDate = filter2_date.split("-").reverse().join("-")

//   if(filter2_date != "" && filter2_medium != "none"){
//     allDetailsTask.map((ele)=>{
//       let date = ele.children[2].children[0].innerText
//       let medium = ele.children[2].children[1].innerText

//       if(date === arrangeDate && medium === filter2_medium){
//         ele.style.display = "flex"
//       }
//       else{
//         ele.style.display = "none"
//       }
//     })
//   }
//   else if(filter2_date != ""){
//     allDetailsTask.map((ele)=>{
//       let date = ele.children[2].children[0].innerText

//       if(date !== arrangeDate){
//         ele.style.display = "none"
//       }
//       else{
//         ele.style.display = "flex"
//       }
//     })
//   }
//   else if(filter2_medium != "none"){
//     allDetailsTask.map((ele)=>{
//       let medium = ele.children[2].children[1].innerText

//       if(filter2_medium !== medium){
//        ele.style.display = "none"
//       }
//       else{
//        ele.style.display = "flex"
//       }
   
//      })
//   }
//   else{
//     allDetailsTask.map((ele)=>{
//       ele.style.display = "flex"
//     })
//   }
// })

const addTask = document.querySelector("#addTask")
const pending_child1_items2 = document.querySelector("#pending_child1_items2")
const completed_task = document.querySelector("#completed_task")

let allDetailsTask = []
let completedTask = []

addTask.addEventListener("click",(e)=>{
  e.preventDefault()

    let div = document.createElement("div")
    div.classList.add("pendingChild")

    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    let p3 = document.createElement("p")
    let p4 = document.createElement("p")

    p1.classList.add("p1")
    p2.classList.add("p2")
    p3.classList.add("p3")
    p4.classList.add("p4")

    let element1 = document.createElement("div")
    element1.classList.add("element1")

    let element2 = document.createElement("div")
    element2.classList.add("element2")

    let label = document.createElement("label")
    label.textContent = "Marks as completed"

    let btn_done = document.createElement("button")
    btn_done.setAttribute("class","taskcompleted")

    let delete_btn = document.createElement("button")
    delete_btn.setAttribute("class","delete_btn")
    delete_btn.innerHTML = "Delete"

    div.append(p1,p2,element1,element2)
    element1.append(p3,p4)
    element2.append(label,btn_done,delete_btn)

    const taskTitle = document.querySelector("#taskTitle").value
    const dueDate = document.querySelector("#dueDate").value
    const taskDetails = document.querySelector("#taskDetails").value
    const priority = document.querySelector("#priority").value
    let arrangeDate = dueDate.split("-").reverse().join("-")

    let task = {
      title: taskTitle,
      date: arrangeDate,
      details: taskDetails,
      priority: priority
    }

    p1.textContent = task.title
    p2.textContent = task.details
    p3.textContent = task.date
    p4.textContent = task.priority

    let count = 0

    if(taskTitle != ""){
      count+=1
    }else{
      alert("Task title")
    }

    if(dueDate != ""){
      count++
    }else{
      alert("Enter your task date")
    }

    if(taskDetails != ""){
      count++
    }else{
      alert("Enter your task")
    }

    if(priority != "none"){
      count++
    }
    else{
      alert("choose your priority")
    }

    if(count === 4){
      allDetailsTask.push(div)
      pending_child1_items2.appendChild(div)
    }


  delete_btn.addEventListener("click",()=>{
    div.remove()
  })

  btn_done.addEventListener("click",()=>{

    completedTask.push(div)

    completedTask.forEach((ele)=>{
      completed_task.append(ele)
      btn_done.style.background = 'yellowgreen'
    })
  })

})



const filter1_submit = document.querySelector("#filter1_submit")

filter1_submit.addEventListener("click",()=>{
  const filter1_date = document.querySelector("#filter1_date").value
  const filter1_medium = document.querySelector("#filter1_medium").value

  let arrangeDate = filter1_date.split("-").reverse().join("-")

  if(filter1_date != "" && filter1_medium != "none"){
    completedTask.map((ele)=>{
      let date = ele.children[2].children[0].innerText
      let medium = ele.children[2].children[1].innerText

      if(date === arrangeDate && medium === filter1_medium){
        ele.style.display = "flex"
      }
      else{
        ele.style.display = "none"
      }
    })
  }
  else if(filter1_date != ""){
    completedTask.map((ele)=>{
      let date = ele.children[2].children[0].innerText
      if(date !== arrangeDate){
        ele.style.display = "none"
      }
      else{
        ele.style.display = "flex"
      }
    })
  }
  else if(filter1_medium != "none"){
    completedTask.map((ele)=>{
      let medium = ele.children[2].children[1].innerText
 
      if(filter1_medium !== medium){
       ele.style.display = "none"
      }
      else{
       ele.style.display = "flex"
      }
   
     })
  }
  else{
    completedTask.map((ele)=>{
      ele.style.display = "flex"
    })
  }
})






const filter2_submit = document.querySelector("#filter2_submit")

filter2_submit.addEventListener("click",()=>{
  const filter2_date = document.querySelector("#filter2_date").value
  const filter2_medium = document.querySelector("#filter2_medium").value
  let arrangeDate = filter2_date.split("-").reverse().join("-")

  if(filter2_date != "" && filter2_medium != "none"){
    allDetailsTask.map((ele)=>{
      let date = ele.children[2].children[0].innerText
      let medium = ele.children[2].children[1].innerText

      if(date === arrangeDate && medium === filter2_medium){
        ele.style.display = "flex"
      }
      else{
        ele.style.display = "none"
      }
    })
  }
  else if(filter2_date != ""){
    allDetailsTask.map((ele)=>{
      let date = ele.children[2].children[0].innerText

      if(date !== arrangeDate){
        ele.style.display = "none"
      }
      else{
        ele.style.display = "flex"
      }
    })
  }
  else if(filter2_medium != "none"){
    allDetailsTask.map((ele)=>{
      let medium = ele.children[2].children[1].innerText

      if(filter2_medium !== medium){
       ele.style.display = "none"
      }
      else{
       ele.style.display = "flex"
      }
   
     })
  }
  else{
    allDetailsTask.map((ele)=>{
      ele.style.display = "flex"
    })
  }
})




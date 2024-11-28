let submit_btn = document.querySelector("#submit_btn");

submit_btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Form submitted");
});

let toggleDivs = document.querySelectorAll(".toggleDiv");

toggleDivs.forEach((ele) => {
  ele.addEventListener("click", () => {
    ele.classList.toggle("bg_change");
  });
});

let colorDiv = document.querySelector("#colorChanger");
let separateColorDiv = document.querySelector("#separateColorDiv");

colorDiv.childNodes.forEach((ele) => {
  ele.addEventListener("click", () => {
    if (ele.textContent == 'Red') {
      separateColorDiv.style.backgroundColor = "red";
    } else if (ele.textContent == "Yellow") {
      separateColorDiv.style.backgroundColor = "yellow";
    } else if (ele.textContent == "Blue") {
      separateColorDiv.style.backgroundColor = "blue";
    } else if (ele.textContent == "Green") {
      separateColorDiv.style.backgroundColor = "green";
    }
  });
});

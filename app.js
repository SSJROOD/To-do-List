const queryString = document.getElementById("input-box");
const listContainer = document.getElementById("listContainer");

const addTask = () => {
  if (queryString.value === "") {
    alert("Please Enter valid input");
  } else {
    let list = document.createElement("li");
    list.innerHTML = queryString.value;
    listContainer.appendChild(list);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    list.appendChild(span);
  }
  queryString.value = "";
  saveData();
};

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};

const showTask = ()=>{
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

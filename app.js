let taskInput = document.querySelector("#todo-input");
let taskList = document.querySelector("#todo-list");
let taskItems = document.querySelectorAll(".task");

function addTask() {
  taskInput.addEventListener("keypress", function(event) {
    if (event.keyCode === 13 & taskInput.value !== "") {
      let newListItem = createTask(taskInput.value);
      taskList.insertBefore(newListItem, taskList.childNodes[0]);
      taskInput.value = "";
    }
  });
}

function createTask(text) {
  let newTask = document.createElement("LI");
  newTask.textContent = text;
  newTask.classList.add("task");
  return newTask;
}

function toggleComplete () {
  taskList.addEventListener("click", function(event) {
    if (event.target.classList.contains("task")) {
      event.target.classList.toggle("completed")
    }
  });
}

addTask();
toggleComplete();
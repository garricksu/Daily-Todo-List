let taskInput = document.querySelector("#todo-input");
let taskList = document.querySelector("#todo-list");
let taskItems = document.querySelectorAll(".task");

function addTask() {
  taskInput.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
      let newListItem = createTask(taskInput.value);
      console.log(taskInput.value);
      taskList.insertBefore(newListItem, taskItems[0]);
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
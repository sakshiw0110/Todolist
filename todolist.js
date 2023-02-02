const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function() {
  const task = taskInput.value;
  const taskItem = `<li>${task} <button class="editBtn">Edit</button> <button class="deleteBtn">Delete</button></li>`;
  taskList.insertAdjacentHTML("beforeend", taskItem);
  taskInput.value = "";
});

taskList.addEventListener("click", function(event) {
  if (event.target.className === "editBtn") {
    const task = event.target.parentElement;
    const taskText = task.textContent.trim();
    const newTask = prompt("Edit task:", taskText);
    if (newTask) {
      task.innerHTML = `${newTask} <button class="editBtn">Edit</button> <button class="deleteBtn">Delete</button>`;
    }
  } else if (event.target.className === "deleteBtn") {
    const task = event.target.parentElement;
    task.remove();
  }
});

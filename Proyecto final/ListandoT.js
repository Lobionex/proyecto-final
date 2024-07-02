let tasks = [];

document.addEventListener("DOMContentLoaded", function() {
const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", function(event) {
event.preventDefault();
const taskTitle = document.getElementById("task-title").value;
const taskDescription = document.getElementById("task-description").value;
const dueDate = document.getElementById("due-date").value;

const newTask = {
title: taskTitle,
description: taskDescription,
dueDate: dueDate,
completed: false
};

tasks.push(newTask);
displayTasks();
taskForm.reset();
});

function displayTasks() {
taskList.innerHTML = "";
tasks.forEach(function(task) {
const taskListItem = document.createElement("li");
taskListItem.textContent = `${task.title} - ${task.dueDate}`;
if (task.completed) {
taskListItem.className = "completed";
}
taskList.appendChild(taskListItem);
});
}

// Add event listener to task list items
taskList.addEventListener("click", function(event) {
if (event.target.tagName === "LI") {
const taskIndex = tasks.findIndex(function(task) {
return task.title === event.target.textContent.split(" - ")[0];
});
tasks[taskIndex].completed = !tasks[taskIndex].completed;
displayTasks();
}
});
});
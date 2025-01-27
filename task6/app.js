document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addButton = document.getElementById("add-btn");
    const taskList = document.getElementById("task-list");
    const clearButton = document.getElementById("clear-btn");
  
    // Load tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  
    function renderTasks() {
      taskList.innerHTML = ""; // Clear the list before re-rendering
      tasks.forEach((task, index) => {
        const li = document.createElement("li");
        if (task.done) {
          li.classList.add("done");
        }
        li.innerHTML = `
          <span>${task.text}</span>
          <button class="done-btn">${task.done ? "Remove" : "Done"}</button>
        `;
  
        // Add event listener for the "Done" or "Remove" button
        li.querySelector(".done-btn").addEventListener("click", function () {
          if (task.done) {
            tasks.splice(index, 1); // Remove task
          } else {
            task.done = true; // Mark as done
          }
          updateLocalStorage();
          renderTasks();
        });
  
        taskList.appendChild(li);
      });
    }
  
    function updateLocalStorage() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  
    // Add task when Enter is pressed or "Add Task" button is clicked
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText) {
        tasks.push({ text: taskText, done: false });
        updateLocalStorage();
        renderTasks();
        taskInput.value = ""; // Clear input field
        addButton.disabled = true; // Disable button again
      }
    }
  
    // Enable/Disable Add button based on input field
    taskInput.addEventListener("input", function () {
      addButton.disabled = !taskInput.value.trim();
    });
  
    // Add task on button click
    addButton.addEventListener("click", addTask);
  
    // Add task on pressing Enter
    taskInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter" && taskInput.value.trim()) {
        addTask();
      }
    });
  
    // Clear all tasks
    clearButton.addEventListener("click", function () {
      tasks = [];
      updateLocalStorage();
      renderTasks();
    });
  
    // Render tasks on page load
    renderTasks();
  });
  
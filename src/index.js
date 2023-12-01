document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
  })
});


document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', handleFormSubmit);
});

function handleFormSubmit(event) {
  event.preventDefault();
  const taskInput = document.getElementById('new-task-description');
  const taskDescription = taskInput.value;
  taskInput.value = ''; 
  const taskList = document.getElementById('tasks');
  const newTask = document.createElement('li');
  newTask.textContent = taskDescription;
  taskList.appendChild(newTask)
}
// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add Task Function
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create a new task element
  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
    <span>${taskText}</span>
    <button class="deleteBtn">Delete</button>
  `;

  // Mark task as completed
  taskItem.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
      e.target.classList.toggle('completed');
    }
  });

  // Delete task
  taskItem.querySelector('.deleteBtn').addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  // Add task to the list
  taskList.appendChild(taskItem);

  // Clear input field
  taskInput.value = '';
}

// Event Listener for Add Task Button
addTaskBtn.addEventListener('click', addTask);

// Add Task on Enter Key Press
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});

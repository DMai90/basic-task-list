// DEFINE UI VARIABLES
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// LOAD ALL EVENT LISTENERS
loadEventListers();

// LOAD ALL EVENT LISTENERS
function loadEventListers() {
  // DOM load event
  document.addEventListener('DOMContentLoaded', getTasks)
  
  //Add task event
  form.addEventListener('submit', addTask);

  // Remove task event
  taskList.addEventListener('click', removeTask);

  // Remove all task events
  clearBtn.addEventListener('click', clearTasks);

  // Filter tasks
  filter.addEventListener('keyup', filterTasks)
};

// Get tasks from local storage
function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task) {
    // Create li element
  const li = document.createElement('li');
  // Add Class
  li.className = 'collection-item';
  //Create text node and append to li
  li.appendChild(document.createTextNode(task));
  // Create new link element
  const link = document.createElement('a');
  // Add class. secondary content so item shows up on the right.
  link.className = 'delete-item secondary-content';
  // Add icon HTML
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);
  // Append li to ul
  taskList.appendChild(li);
  })
}

// Add task

function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }
// Create li element
  const li = document.createElement('li');
  // Add Class
  li.className = 'collection-item';
  //Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class. secondary content so item shows up on the right.
  link.className = 'delete-item secondary-content';
  // Add icon HTML
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Store in local storage
  storeTaskInLocalStorage(taskInput.value);

  //Clear input
  taskInput.value = '';

  e.preventDefault();
};

// Store task in local storage
function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
// Remove Task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();

      // Remove from local storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
};

// Remove from local storage
function removeTaskFromLocalStorage(taskItem) {
  //Check local storage and put it into a variable first
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index) {
    if(taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Clear Tasks
function clearTasks(e) {
  // While Loops
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  clearTasksFromLocalStorage();
};

// Clear tasks from local storage
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

// Filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function(task) {
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
  console.log(text)
}



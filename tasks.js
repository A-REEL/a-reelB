// Function to fetch and display tasks
function fetchTasks() {
    fetch('/api/tasks')
      .then((response) => response.json())
      .then((tasks) => {
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = ''; // Clear the current list
        tasks.forEach((task) => {
          const taskDiv = createTaskElement(task);
          taskList.appendChild(taskDiv);
        });
      })
      .catch((error) => console.error(error));
  }
  
  // Function to create a task element for displaying in the UI
  function createTaskElement(task) {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskDiv.innerHTML = `
      <div class="task-header">
        <span class="user">User: ${task.user}</span>
        <button class="delete-task" onclick="deleteTask('${task._id}')">Delete</button>
      </div>
      <div class="task-content" draggable="true" ondragstart="drag(event)" id="${task._id}">
        <h3>${task.title}</h3>
        <p>${task.description}</p>
      </div>
    `;
    return taskDiv;
  }
  
  // Function to add a new task
  function addTask() {
    const title = 'New Task';
    const description = 'Description for the new task';
    const user = 'user';
  
    fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description, user }),
    })
      .then((response) => response.json())
      .then((task) => {
        const taskList = document.getElementById('task-list');
        const taskDiv = createTaskElement(task);
        taskList.appendChild(taskDiv);
      })
      .catch((error) => console.error(error));
  }
  
  // Function to delete a task
  function deleteTask(taskId) {
    fetch(`/api/tasks/${taskId}`, {
      method: 'DELETE',
    })
      .then(() => {
        const taskElement = document.getElementById(taskId);
        taskElement.remove();
      })
      .catch((error) => console.error(error));
  }
  
  // Function to update a task
  function updateTask(taskId, updatedData) {
    fetch(`/api/tasks/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((task) => {
        const taskElement = document.getElementById(taskId);
        // Update the task's UI representation with the updated data
        taskElement.querySelector('h3').textContent = task.title;
        taskElement.querySelector('p').textContent = task.description;
      })
      .catch((error) => console.error(error));
  }
  const savedPosition = JSON.parse(localStorage.getItem('taskPosition')) || {};
  if (savedPosition[taskDiv.id]) {
    const position = savedPosition[taskDiv.id];
    taskDiv.style.left = position.left + 'px';
    taskDiv.style.top = position.top + 'px';
  }
  
  // Add an event listener for dragend to save the position
  taskDiv.addEventListener('dragend', (event) => {
    const position = {
      left: event.target.style.left,
      top: event.target.style.top,
    };
  
    // Store the position in localStorage
    const savedPosition = JSON.parse(localStorage.getItem('taskPosition')) || {};
    savedPosition[event.target.id] = position;
    localStorage.setItem('taskPosition', JSON.stringify(savedPosition));
  });
  
  return taskDiv;
  // Initial fetch to load tasks when the page loads
  fetchTasks();
  







// Function to create a draggable task element
function createTaskElement() {
  const taskDiv = document.createElement('div');
  taskDiv.className = 'task';
  taskDiv.draggable = true;
  taskDiv.contentEditable = true; // Enable text editing
  taskDiv.textContent = 'Drag me and edit';
  taskDiv.style.left = '0px';
  taskDiv.style.top = '0px';

  // Add drag-and-drop event listeners
  taskDiv.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.textContent);
  });

  taskDiv.addEventListener('dragover', (event) => {
    event.preventDefault();
  });

  taskDiv.addEventListener('drop', (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    event.target.textContent = data;
  });

  taskDiv.addEventListener('drag', (event) => {
    event.target.style.left = (event.clientX - 50) + 'px';
    event.target.style.top = (event.clientY - 50) + 'px';
  });

  return taskDiv;
}

// Function to add a new task
function addTask() {
  const taskList = document.getElementById('board');
  const taskDiv = createTaskElement();
  taskList.appendChild(taskDiv);
}

// Function to allow dropping tasks
function allowDrop(event) {
  event.preventDefault();
}

// Initialize the board
function initializeBoard() {
  const taskContainer = document.getElementById('board');
  taskContainer.style.position = 'relative';

  // Initial tasks
  addTask();
  addTask();
  addTask();
}

// Initialize the board when the page loads
initializeBoard();



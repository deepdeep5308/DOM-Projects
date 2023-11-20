// Function to create a new task item
function createTaskElement(taskContent) {
    const listItem = document.createElement('li');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
  
    const label = document.createElement('label');
    label.innerText = taskContent;
  
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = deleteTask;
  
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);
  
    return listItem;
  }
  
  // Function to add a new task to the list
  function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskContent = taskInput.value.trim();
  
    if (taskContent !== '') {
      const listItem = createTaskElement(taskContent);
      document.getElementById('todoList').appendChild(listItem);
      taskInput.value = '';
    } else {
      alert('Please enter a task!');
    }
  }
  
  // Function to delete a task from the list
  function deleteTask() {
    this.parentNode.remove();
  }
  
  // Add event listeners for pressing 'Enter' key to add tasks
  document.getElementById('taskInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      addTask();
    }
  });
  
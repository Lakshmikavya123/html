document.addEventListener('DOMContentLoaded', function() {
  const taskInput = document.getElementById('new-task');
  const addTaskButton = document.getElementById('add-task-button');
  const taskList = document.getElementById('task-list');

  addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      addTask(taskText);
      taskInput.value = '';
    }
  });

  taskList.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
      const li = e.target.parentElement;
      taskList.removeChild(li);
    }
  });

  function addTask(task) {
    const li = document.createElement('li');
    li.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    li.appendChild(deleteButton);

    taskList.appendChild(li);
  }
});

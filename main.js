// https://github.com/karankumar-js/To-Do-List
// https://dev.to/karankumar_js/creating-todo-list-using-vanilla-javascript-2l7l

const ref = {
  taskForm: document.querySelector('#new-task-form'),
  taskInput: document.querySelector('#new-task-input'),
  taskList: document.querySelector('#tasks-list'),
};

ref.taskForm.addEventListener('submit', submit);

function submit(event) {
  event.preventDefault();
  addTask(ref.taskInput.value);
  ref.taskInput.value = '';
}

function addTask(newTask) {
  const newTaskItem = document.createElement('li');
  const newCheckBox = document.createElement('div');
  const newTaskField = document.createElement('span');
  newTaskField.textContent = newTask;

    ref.taskList.appendChild(newTaskItem);
    newTaskItem.appendChild(newCheckBox);
    newTaskItem.appendChild(newTaskField);
    
}

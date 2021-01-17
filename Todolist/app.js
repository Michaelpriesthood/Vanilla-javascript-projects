// Bring in the Selectors
const todoInput = document.querySelector('.add-todo');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

// Events
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', checkDelete);

// Functions

function addTodo(event) {
  // Prevents the Form from Submitting and the page from Reloading
  event.preventDefault();

  if (todoInput.value === '') {
    alert('Your Input is Empty');
  } else {
    //   Created a new Div
    const newDiv = document.createElement('div');
    //   Added a class to it
    newDiv.classList.add('todos');
    //   Appended to the todoList
    todoList.appendChild(newDiv);

    //   Created a newTodo tag
    const newTodo = document.createElement('li');
    //   Added a class to it
    newTodo.classList.add('todo-items');
    //   The InnerHtml is equal to todoInput.value
    newTodo.innerHTML = todoInput.value;
    // Clear the todoInput.value after submission
    todoInput.value = '';

    //   Appended to the newDiv that was created
    newDiv.appendChild(newTodo);

    // Created a completedButton
    const completedButton = document.createElement('button');
    //   The InnerHtml is equal to todoInput.value
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    //   Added a class to it
    completedButton.classList.add('completed-btn');
    //   Appended to the newDiv that was created
    newDiv.appendChild(completedButton);

    // Created a DeleteButton
    const deleteButton = document.createElement('button');
    //   The InnerHtml is equal to todoInput.value
    deleteButton.innerHTML = '<i class="fas fa-times"></i>';
    //   Added a class to it
    deleteButton.classList.add('delete-btn');
    //   Appended to the newDiv that was created
    newDiv.appendChild(deleteButton);
  }
}

function checkDelete(event) {
  // For the Check Mark
  const todo = event.target;
  if (todo.classList[0] === 'completed-btn') {
    const item = todo.parentElement;
    item.classList.toggle('todos-completed');
  }

  // For the Delete

  if (todo.classList[0] === 'delete-btn') {
    const item = todo.parentElement;
    item.classList.add('fade-out');
    item.addEventListener('transitionend', () => {
      item.remove();
    });
  }
}

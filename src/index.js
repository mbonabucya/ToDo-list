import './style.css';
// const section = document.querySelector('section');
const listContainer = document.querySelector('.todos-container');
// const btn = document.getElementById('completed-btn');
// const textInput = document.querySelector('input');

// class Myobject {
//   constructor(description, completed, index) {
//     this.description = description;
//     this.completed = completed;
//     this.index = index;
//   }
// }

const myTasks = [
  {
    index: 1,
    description: 'task 1',
    completed: false,

  },
  {
    index: 2,
    description: 'task 2',
    completed: false,

  },
  {
    index: 3,
    description: 'task 3',
    completed: false,

  },
  {
    index: 4,
    description: 'task 4',
    completed: false,

  },
  {
    index: 5,
    description: 'task 5',
    completed: false,

  },
  {
    index: 6,
    description: 'task 6',
    completed: false,

  },
  {
    index: 7,
    description: 'task 7',
    completed: false,

  },
  {
    index: 4,
    description: 'task 8',
    completed: false,

  },
];

const addTodo = (todoValue) => {
  const {
    description,
  } = myTasks[todoValue];

  const myTodos = document.createElement('div');
  myTodos.className = 'tasks';
  myTodos.innerHTML += `
  <input type="checkbox" class="checkboxes">
  <span>${description}</span>
  <i class="fa-solid fa-ellipsis-vertical"></i>
  <i class="fa-solid fa-trash"></i>


  `;
  listContainer.appendChild(myTodos);
};
for (let i = 0; i < myTasks.length; i += 1) {
  addTodo(i);
}
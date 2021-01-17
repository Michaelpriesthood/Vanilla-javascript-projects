// Selectors
const boxes = document.querySelectorAll('.box');
const draggable = document.querySelector('.draggable');

// Events Listeners for the draggables
draggable.addEventListener('dragstart', dragStart);
draggable.addEventListener('dragend', dragEnd);

// Event Listeners for the boxes

for (box of boxes) {
  box.addEventListener('dragover', dragOver);
  box.addEventListener('dragenter', dragEnter);
  box.addEventListener('dragleave', dragLeave);
  box.addEventListener('drop', dragDrop);
}

// Draggable Functions
function dragStart() {
  this.classList.toggle('hold');
  setTimeout(() => this.classList.toggle('visible'), 0);
}

function dragEnd() {
  this.className = 'draggable';
}

function dragOver(event) {
  event.preventDefault();
}
function dragEnter(event) {
  this.className += ' hovered';
}
function dragLeave() {
  this.className = 'box';
}
function dragDrop() {
  this.append(draggable);
}

// Selectors
const addBtn = document.querySelector('#btn-add');
const inputNames = document.querySelector('#name-input');
const nameCollections = document.querySelector('#name-collection');

const filterInput = document.querySelector('#filterInput');

// Events
addBtn.addEventListener('click', addNames);
nameCollections.addEventListener('click', removeNames);
filterInput.addEventListener('keyup', filterNames);

// Functions
function addNames() {
  const input = inputNames.value.trim();
  if (input === '') {
    alert('Your input Field is Empty');
  } else {
    // Create a new Div
    const newDiv = document.createElement('div');
    newDiv.classList.add('names');

    //   Create an Li
    const li = document.createElement('li');
    //   Add a class
    li.classList.add('name-list');

    // Create an anchor tag
    const a = document.createElement('a');
    // Create the text node for anchor element.
    const text = input;

    // Append the text node to anchor element.
    a.append(text);
    a.href = '#';

    //   Create a button tag
    const deleteButton = document.createElement('button');
    //   Add a class
    deleteButton.classList.add('btn-delete');
    deleteButton.innerText = 'Delete';

    // Append the created Tags to the DOM
    nameCollections.appendChild(newDiv);
    newDiv.appendChild(li);
    newDiv.appendChild(deleteButton);
    li.appendChild(a);
    // Empty the input Value
    inputNames.value = '';
  }
}

function removeNames(event) {
  const name = event.target;
  if (name.classList[0] === 'btn-delete') {
    const nameItem = name.parentElement;
    nameItem.classList.toggle('fade-out');
    nameItem.addEventListener('transitionend', () => {
      nameItem.remove();
    });
  }
}

function filterNames() {
  // Get the value of the input
  const filterValue = filterInput.value.toUpperCase();
  // get the divs
  const div = document.querySelectorAll('div.names');
  //   Get the divs from the ul
  nameCollections.div;

  // Loop through the divs
  for (let i = 0; i < div.length; i++) {
    const a = div[i].getElementsByTagName('a')[0];
    // If Matched
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      div[i].style.display = '';
    } else {
      div[i].style.display = 'none';
    }
  }
}

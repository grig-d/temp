const ref = {
  // container: document.querySelector('.container'),
  row: document.getElementById('row'),
  resBtn: document.getElementById('res'),
  delBtn: document.getElementById('del'),
  addBtn: document.getElementById('add'),
};

function reset() {
  ref.delBtn.disabled = false;
  ref.row.textContent = '';
  for (let i = 0; i < 8; i++) {
    addColumn();
  }
}

reset();
ref.resBtn.addEventListener('click', reset);


// ref.container.addEventListener('click', message);

// function message(event) {
//   if(event.target.tagName === 'LI') {
//   console.log(event.target.tagName);
//   console.log(event.target.parentElement.tagName);
//   event.target.parentElement.append('li');
//   }

// }

// console.log(ref);
// console.log(ref.container);
// console.log(ref.row);
// // function makeBlink () {
// //     // body
// // }

// function removeColumn() {
//   console.log('do');
//   const row = document.getElementById('row');
//   row.removeChild(row.lastChild);
// }

// ref.del.addEventListener('click', removeColumn);

//
function addColumn() {
  const select = document.getElementById('SELECT_country');
  const clone = select.cloneNode(true);

  clone.textContent = 'SELECT_country';

  document.getElementById('row').appendChild(clone);

  if (document.getElementById('row').childNodes.length > 0) {
    ref.delBtn.disabled = false;
  }

  createColumn();
}

function deleteColumn() {
  const select = document.getElementById('row');
  if (select.childNodes.length > 0) {
    select.removeChild(select.lastChild);
  }
  if (select.childNodes.length === 0) {
    ref.delBtn.disabled = true;
  }
}

document.getElementById('add').addEventListener('click', addColumn);
ref.delBtn.addEventListener('click', deleteColumn);

function createColumn() {
  const column = document.createElement('div');
  console.log(column);
}

// function createQuad() {
//   const quad = document.createElement('div');
//   console.log(quad);
// }

const ref = {
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

function createColumn() {
  const newColumn = document.createElement('div');
  newColumn.classList.add('column');
  newColumn.appendChild(createQuad());
  return newColumn;
}

function addColumn() {
  ref.row.appendChild(createColumn());
  if (ref.row.childNodes.length) {
    ref.delBtn.disabled = false;
  }
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

function createQuad() {
  const newQuad = document.createElement('div');
  newQuad.classList.add('quad');
  return newQuad;
}

ref.resBtn.addEventListener('click', reset);
ref.delBtn.addEventListener('click', deleteColumn);
ref.addBtn.addEventListener('click', addColumn);

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



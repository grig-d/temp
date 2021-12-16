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
  newQuad.style.animationDuration = '0.4s';
  newQuad.style.animationDelay = '0.1s';

  return newQuad;
}

ref.resBtn.addEventListener('click', reset);
ref.delBtn.addEventListener('click', deleteColumn);
ref.addBtn.addEventListener('click', addColumn);

ref.row.addEventListener('click', addQuad);

function addQuad(event) {
  if (event.target.classList.contains('quad')) {
    const parent = event.target.parentElement;
    parent.appendChild(createQuad());

    if (parent.childNodes.length > 3) {
      makeBlinking(parent);
    }
  }

  // check column for able to blinking
}

function makeBlinking(parent) {
  // need number of children
  const array = [...parent.childNodes];
  console.log(array);
  // clear all quad classes
  // element.style.backgroundColor = "red"
  // elt.style.color = null
  array.forEach(element => element.style = null);



}

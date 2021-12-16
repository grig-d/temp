const ref = {
  container: document.querySelector('.container'),
  row: document.querySelector('.row-list'),
};

ref.container.addEventListener('click', message);

function message(event) {
  if(event.target.tagName === 'LI') {
  console.log(event.target.tagName);
  console.log(event.target.parentElement.tagName);
  event.target.parentElement.append('li');
  }

}


console.log(ref);
console.log(ref.container);
console.log(ref.row);
// function makeBlink () {
//     // body
// }


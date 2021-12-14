const ref = {
  container: document.querySelector('.container'),
  row: document.querySelector('.row-list'),
};

ref.container.addEventListener('click', message);

function message(event) {
  console.log(event.target);
  console.log(event.currentTarget);

}


console.log(ref);
console.log(ref.container);
console.log(ref.row);
// function makeBlink () {
//     // body
// }

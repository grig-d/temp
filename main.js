import CountdownTimer from './js/countdown.js';

const deadLine = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2021 22:00:00'),
});

deadLine.startCountdown();

//////////////////////////////////

const deadlineInfo = {
  name: 'Охота на фазана',
  author: 'Марта Кэтра',
  genre: 'детектив',
  pageCount: 724,
  publisher: 'ООО Астрель',
};

const stringified = JSON.stringify(deadlineInfo); // object to JSON

const parsed = JSON.parse(stringified); // JSON to object

localStorage.setItem('key', 'value');
const value = localStorage.getItem('key');
console.log('value from localStorage: ', value);

const settings = {
  theme: 'dark',
  fontSize: 14,
};

localStorage.setItem('settings', JSON.stringify(settings));

/////////////////////////

$(function () {
  $.datepicker.setDefaults({
    changeMonth: true,
    changeYear: true,
  });
  $('#datepicker').datepicker({
    dateFormat: 'd M yy',
  });
});

$(document).ready(function () {
  $('#timepicker').timepicker({
    timeFormat: 'HH:mm',
    defaultTime: '0',
    interval: 1,
    dynamic: false,
    dropdown: true,
    scrollbar: true,
  });
});

//////////////////////

const ref = {
  datePicker: document.querySelector('#datepicker'),
  timePicker: document.querySelector('#timepicker'),
  setDeadlineBtn: document.querySelector('#setDeadlineBtn'),
};

const today = Date();
console.log(today);
console.log(typeof new Date().toISOString().slice(0, 10));

ref.setDeadlineBtn.addEventListener('click', e => {
  e.preventDefault();
  if (ref.datePicker.value) {
    const arr = ref.datePicker.value.split(' ');
    const newDateTime = `${arr[1]} ${arr[0]}, ${arr[2]} ${ref.timePicker.value}:00`;
    console.log(new Date('Dec 31, 2021 22:00:00'));
    console.log(new Date(newDateTime));
    deadLine.targetDate = new Date(newDateTime);
  }
});

// console.log(deadLine.targetDate);

// TODO: deadline info panel about deadline date and able to update or delete countdown
// TODO: update deadline
// TODO: delete deadline
// TODO: add new countdown
// TODO: when click btn 'set deadline' date info is written to localStorage

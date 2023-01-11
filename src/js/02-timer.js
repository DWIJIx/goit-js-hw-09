import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    input: document.querySelector('#datetime-picker'),
    btnStart: document.querySelector('[data-start]'),
    daysSpan: document.querySelector('[data-days]'),
    hoursSpan: document.querySelector('[data-hours]'),
    minutesSpan: document.querySelector('[data-minutes]'),
    secondsSpan: document.querySelector('[data-seconds]')
}
refs.btnStart.disabled = true;
let deltaTime;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
      const deadLine = (selectedDates[0]).getTime()
    //   console.log('вибраний час', deadLine)
    //   console.log('час теперішній', Date.now()) 
      if (deadLine >= Date.now()) {
          refs.btnStart.disabled = false;
          deltaTime = deadLine - Date.now()
        } else {
          Notiflix.Notify.failure("Please choose a date in the future");
            refs.btnStart.disabled = true;
        } 
  },
};

flatpickr("#datetime-picker", options);

function onBtnStartClick() {
    let { days, hours, minutes, seconds } = convertMs(deltaTime);
        refs.daysSpan.textContent = `${days}`;
        refs.hoursSpan.textContent = `${hours}`;
        refs.minutesSpan.textContent = `${minutes}`;
        refs.secondsSpan.textContent = `${seconds}`;
    let sec = 1000;
    refs.btnStart.disabled = true;
    refs.input.disabled = true;
    const intervalId = setInterval(() => {
        let { days, hours, minutes, seconds } = convertMs(deltaTime - sec);
        refs.daysSpan.textContent = `${days}`;
        refs.hoursSpan.textContent = `${hours}`;
        refs.minutesSpan.textContent = `${minutes}`;
        refs.secondsSpan.textContent = `${seconds}`;
        sec += 1000;
        if ((deltaTime - sec) < 10) {
            // console.log('Stop')
            clearInterval(intervalId)
            refs.input.disabled = false;
        }
    },1000)
    
   }

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function pad(value) {
    return String(value).padStart(2, '0');
}

refs.btnStart.addEventListener('click', onBtnStartClick)
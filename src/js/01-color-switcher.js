const refs = {
    bodyEl: document.querySelector('body'),
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
}
refs.startBtn.addEventListener('click', onStartBtnClick)
refs.stopBtn.addEventListener('click', onStopBtnClick)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStartBtnClick() {
    refs.startBtn.disabled = true;
    
    refs.bodyEl.style.backgroundColor = getRandomHexColor();
    timerId = setInterval(() => {
    refs.bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000)
}

function onStopBtnClick() {
    clearInterval(timerId);
    refs.startBtn.disabled = false;
}

import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  fDelay:document.querySelector('[name = "delay"]'),
  step:document.querySelector('[name = "step"]'),
  amount: document.querySelector('[name = "amount"]'),
  button: document.querySelector('form button')
};


refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  disableForm();   
  const fDelay = Number(refs.fDelay.value);
  const step = Number(refs.step.value);
  const amount = Number(refs.amount.value);
  
  const totalTime = fDelay + step * amount;
  
  setTimeout(() => {
    enableForm()
  },totalTime)

  for (let i = 1; i <= amount; i += 1){
    const delayStep = fDelay + step * (i - 1);
    createPromise(i, delayStep).then(onSuccess).catch(onError)
  };
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldResolve) {
        res({ position, delay })
      } else {
        rej({ position, delay })
      }
    }, delay);
  });
};

function onSuccess({ position, delay }) { 
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
};

function onError({ position, delay }) {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  
};

function disableForm() {
  refs.form.disabled = true;
  refs.fDelay.disabled = true;
  refs.step.disabled = true;
  refs.amount.disabled = true;
  refs.button.disabled = true;
}

function enableForm() {
  refs.form.disabled = false;
  refs.fDelay.disabled = false;
  refs.step.disabled = false;
  refs.amount.disabled = false;
  refs.button.disabled = false;
}
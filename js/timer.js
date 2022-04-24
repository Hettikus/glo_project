const timerBlock = {
  days: document.querySelector('.timer__days'),
  hours: document.querySelector('.timer__hours'),
  minutes: document.querySelector('.timer__minutes'),
  seconds: document.querySelector('.timer__seconds'),
};

const deadline = new Date('25 april 2022');

const calcRemainingTime = (deadline) => {
  const date = new Date();
  const timeRemaining = deadline.getTime() - date.getTime();
  if (timeRemaining < 0) return false;
  const d = 1000 * 60 * 60 * 24;
  const h = 1000 * 60 * 60;
  const m = 1000 * 60;
  const s = 1000;

  const days = Math.floor(timeRemaining / d);
  const hours = Math.floor((timeRemaining - days * d) / h);
  const minutes = Math.floor((timeRemaining - days * d - hours * h) / m);
  const seconds = Math.floor((timeRemaining - days * d - hours * h - minutes * m) / 1000);

  const timeSplit = {
    days,
    hours,
    minutes,
    seconds,
  };
  return timeSplit;
};

const updateTimer = (remainingTime) => {
  // const remainingTime = calcRemainingTime(deadline);

  if (!remainingTime) {
    Object.keys(timerBlock).forEach((key) => (timerBlock[key].textContent = '00'));

    return false;
  } else {
    Object.keys(timerBlock).forEach(
      (key) =>
        (timerBlock[key].textContent = remainingTime[key].toString().padStart(2, 0))
    );
    return true;
  }
};

const timerInterval = setInterval(
  () =>
    calcRemainingTime(deadline)
      ? updateTimer(calcRemainingTime(deadline))
      : clearInterval(timerInterval),
  500
);

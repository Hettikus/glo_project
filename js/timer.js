// жуткие селекторы
const timerBlock = {
  days: document.querySelector('.timer__days'),
  hours: document.querySelector('.timer__hours'),
  minutes: document.querySelector('.timer__minutes'),
  seconds: document.querySelector('.timer__seconds'),
};

const timerDescr = {
  days: timerBlock.days.nextElementSibling,
  hours: timerBlock.hours.nextElementSibling,
  minutes: timerBlock.minutes.nextElementSibling,
  seconds: timerBlock.seconds.nextElementSibling,
};

// дедлайн выставляем
const deadline = new Date('25 april 2022');

// массивы для переключения текста + функция
const adjSeconds = ['секунда', 'секунды', 'секунд'];
const adjMinutes = ['минута', 'минуты', 'минут'];
const adjHours = ['час', 'часа', 'часов'];
const adjDays = ['день', 'дня', 'дней'];

const adjustedText = (value, type) => {
  switch (value[-1]) {
    case 1:
      return type[0];
      break;
    case 2:
    case 3:
    case 4:
      return type[1];
      break;
    default:
      return type[2];
  }
};

// считаем время
const calcRemainingTime = (deadline) => {
  const date = new Date();
  const timeRemaining = deadline.getTime() - date.getTime();
  // возвращаем false если время вышло
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
  // передаем объект с таймерами
  return timeSplit;
};

// обновляем таймер
const updateTimer = (remainingTime) => {
  // если время вышла - сразу рисуем нули , красный текст и возващаем false
  if (!remainingTime) {
    Object.keys(timerBlock).forEach((key) => (timerBlock[key].textContent = '00'));
    document
      .querySelectorAll('.timer__count')
      .forEach((element) => element.classList.add('red_text'));

    return false;
    // или рисуем красивые таймеры
  } else {
    // console.log(remainingTime);
    const remDays = remainingTime.days;
    const remHours = remainingTime.hours;
    const remMinutes = remainingTime.minutes;
    const remSeconds = remainingTime.seconds;

    timerBlock.days.textContent = remDays;
    timerBlock.hours.textContent = remHours;
    timerBlock.seconds.textContent = remSeconds;
    timerBlock.minutes.textContent = remMinutes;

    console.log(remDays);
    console.log(adjustedText(1, adjMinutes));
    timerDescr.days.textContent = adjustedText(remDays, adjDays);
    timerDescr.hours.textContent = adjustedText(remHours, adjHours);
    timerDescr.minutes.textContent = adjustedText(remMinutes, adjMinutes);
    timerDescr.seconds.textContent = adjustedText(remSeconds, adjSeconds);
  }

  return true;
};
// сбрасываем интервал
const timerInterval = setInterval(() => {
  updateTimer(calcRemainingTime(deadline));
  if (!calcRemainingTime(deadline)) clearInterval(timerInterval);
}, 500);

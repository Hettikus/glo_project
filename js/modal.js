// выбираем элементы, с которыми будем работать
const modalBtn = document.querySelector('.modal__button');
const modalWindow = document.querySelector('.modal');
const modalInner = document.querySelector('.modal__inner');

// импортируем функцию для смены класса, чтоб всё было декларативнее
import { toggleClass } from './helpers.js';

// вешаем на кнопку тоггл класса hidden, который теперь у модального окна исходно
modalBtn.addEventListener(
  'click',
  toggleClass.bind({ element: modalWindow, cssClass: 'hidden' })
);

// при клике на зону вокруг модального окна - убираем его. при клике в центральной области - ничего не делаем
modalWindow.addEventListener('click', function (event) {
  event.preventDefault();
  // смотрим, если ли у нас в родителях modal__inner, если есть - ничего не делаем.  И грязный хак для кнопки. надо еще подумать, как сделать лучше
  if (event.target.closest('.modal__inner') && !event.target.dataset.modalClose) return;
  // если нет - тогглим
  toggleClass.apply({ element: modalWindow, cssClass: 'hidden' });
});

// добавляем кнопочку в html
const closeBtnHTML = `  
  <button class="modal__button-close">
    <span aria-hidden="true" data-modal-close="true">&times;</span>
  </button>`;

modalInner.insertAdjacentHTML('afterbegin', closeBtnHTML);

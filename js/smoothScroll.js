const smoothScroll = () => {
  // находим всё одной строкой по комбо-селектору
  const navBar = document.querySelector('.header__nav');

  // вешаем jдин эвент листенер на весь навбар
  navBar.addEventListener('click', (e) => {
    // отменяем исходное поведение
    e.preventDefault();

    // проверяем, что клик идет по ссылке, а не непонятно куда
    if (e.target.nodeName !== 'A') return;
    // вместо getAttribute просто берем свойсво hash объекта цели клика
    seamless.scrollIntoView(document.querySelector(e.target.hash), {
      scroll: 'start',
      behaviour: 'smooth',
    });
    // document
    //   .querySelector(e.target.hash)
    //   .scrollIntoView({ scroll: 'start', behaviour: 'smooth' });
  });
};

smoothScroll();

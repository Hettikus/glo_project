const programLine = document.querySelector('.program__content');

// Универсальный выключатор + демонстрация понимания forEach
const disableElementsClass = (node, className) => {
  node
    .querySelectorAll(`.${className}`)
    .forEach((element) => element.classList.toggle(className));
};

// ловим эвент при всплытии, чтоб не плодить эвентлистенеры сверх меры
programLine.addEventListener('click', (event) => {
  const target = event.target;
  // проверяем, на какой элемент ткнули, если не тот - завершаем выполнение
  if (!target.classList.contains('program-line__title')) return;
  // ищем первый элемент с классом описания в дереве под родителем заголовка
  const description = target.parentNode.querySelector('.program-line__descr');
  // вырубаем все
  disableElementsClass(programLine, 'active');
  // показываем нужный
  description.classList.toggle('active');
});

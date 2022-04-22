const programLine = document.querySelector('.program__content');

const disableElementsClass = (node, className) => {
  node
    .querySelectorAll(`.${className}`)
    .forEach((element) => element.classList.toggle(className));
};

programLine.addEventListener('click', (event) => {
  const target = event.target;
  if (!target.classList.contains('program-line__title')) return;

  console.log(target.parentNode);
  const description = target.parentNode.querySelector('.program-line__descr');
  disableElementsClass(programLine, 'active');
  description.classList.toggle('active');
});

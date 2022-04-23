// переключаем видимость классом, а не инлайн стилем, ибо моветон
// на входе ждем this с двумя параметрами через bind или apply
export const toggleClass = function (event) {
  console.log('click');
  const element = this.element;
  const cssClass = this.cssClass;
  element.classList.toggle(cssClass);
};

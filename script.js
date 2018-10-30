const prepareDOM = () => {
  preparePositionTabs();
  prepareStatusTabs();
  prepareTableBody();
};

const getPositionTabs = () => {
  return document.querySelectorAll('.Table2__td--fixed-width:nth-child(1)');
};

const getStatusTabs = () => {
  return document.querySelectorAll('.Table2__td--fixed-width:nth-child(5)');
};

const getTableBody = () => {
  return document.querySelector('.Table2__table__wrapper tbody:nth-child(1)');
};

const preparePositionTabs = () => {
  const tabs = getPositionTabs();
  resetElementsInlineWidth(tabs);
};

const prepareStatusTabs = () => {
  const tabs = getStatusTabs();
  resetElementsInlineWidth(tabs);
};

const prepareTableBody = () => {
  const tableBody = getTableBody();
  addCustomClassToElements('custom-TableBody', [tableBody]);
};

const resetElementsInlineWidth = elements => {
  elements.forEach(element => {
    element.style.width = null;
  });
};

const addCustomClassToElements = (className, elements) => {
  elements.forEach(element => {
    element.classList.add(className);
  });
};

window.addEventListener('load', prepareDOM, false);

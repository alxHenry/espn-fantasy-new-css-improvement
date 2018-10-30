const getPositionTabs = () => document.querySelectorAll('.Table2__td--fixed-width:nth-child(1)');
const getStatusTabs = () => document.querySelectorAll('.Table2__td--fixed-width:nth-child(5)');
const getTableBody = () => document.querySelector('.Table2__table__wrapper tbody:nth-child(1)');
const getPageContainer = () => document.querySelector('div.page-container');
const getTableScroller = () =>
  document.querySelectorAll('.Table2__shadow-scroller .Table2__table-scroll');

const prepareDOM = () => {
  preparePositionTabs();
  prepareStatusTabs();
  prepareTableBody();
  preparePageContainer();
  prepareTableScroller();
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

const preparePageContainer = () => {
  const pageContainer = getPageContainer();
  addCustomClassToElements('custom-PageContainer', [pageContainer]);
};

const prepareTableScroller = () => {
  const tableScroller = getTableScroller();
  addCustomClassToElements('custom-TableScroller', tableScroller);
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

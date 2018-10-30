const prepareDOM = () => {
  resetPositionTabsWidth();
  resetStatusTabsWidth();
};

const getPositionTabs = () => {
  return document.querySelectorAll('.Table2__td--fixed-width:nth-child(1)');
};

const getStatusTabs = () => {
  return document.querySelectorAll('.Table2__td--fixed-width:nth-child(5)');
};

const resetPositionTabsWidth = () => {
  const tabs = getPositionTabs();
  resetElementsInlineWidth(tabs);
};

const resetStatusTabsWidth = () => {
  const tabs = getStatusTabs();
  resetElementsInlineWidth(tabs);
};

const resetElementsInlineWidth = elements => {
  elements.forEach(element => {
    element.style.width = null;
  });
};

window.addEventListener('load', prepareDOM, false);

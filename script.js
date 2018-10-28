const prepareDOM = () => {
  const tabs = getPositionTabs();

  if (!tabs.length) {
    return;
  }

  resetPositionTabsWidth(tabs);
};

const getPositionTabs = () => {
  return document.querySelectorAll(
    ".Table2__td.Table2__td--fixed-width:nth-child(1)"
  );
};

const resetPositionTabsWidth = positionTabs => {
  positionTabs.forEach(positionTab => {
    positionTab.style.width = null;
  });
};

window.addEventListener("load", prepareDOM, false);

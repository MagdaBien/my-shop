const doIterrable = (notIterable, property) => {
  let newTab = [];
  notIterable.forEach((item) => {
    for (let objProperty in item) {
      if (objProperty === property) {
        newTab.push(item[objProperty]);
      }
    }
  });
  return newTab;
};

module.exports = doIterrable;

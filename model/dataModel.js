let dataStore = [];

const addData = (data) => {
  dataStore.push(data);
  return dataStore;
};

const getData = () => {
  return dataStore;
};

module.exports = {
  addData,
  getData,
};

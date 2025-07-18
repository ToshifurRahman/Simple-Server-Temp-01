const model = require("../model/dataModel");

const handlePost = (req, res) => {
  // Simulate adding data from a POST request
  const newData = { message: "I am post request", timestamp: new Date() };
  model.addData(newData);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Data added: I am post request");
};

const handleGet = (req, res) => {
  const data = model.getData();
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(
    "Data retrieved: " +
      (data.length > 0 ? data[data.length - 1].message : "No data")
  );
};

module.exports = {
  handlePost,
  handleGet,
};

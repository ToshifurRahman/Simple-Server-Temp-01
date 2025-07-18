const handlePost = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("I am post request");
};

const handleGet = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("I am get request");
};

module.exports = {
  handlePost,
  handleGet,
};

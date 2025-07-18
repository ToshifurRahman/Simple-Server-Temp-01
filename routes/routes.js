const controller = require("../controller/requestController");

const routes = (req, res) => {
  if (req.method === "POST") {
    controller.handlePost(req, res);
  } else if (req.method === "GET") {
    controller.handleGet(req, res);
  } else {
    res.statusCode = 405;
    res.end("Method Not Allowed");
  }
};

module.exports = routes;

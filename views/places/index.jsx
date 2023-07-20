// index.jsx
const React = require("react");
const placesindex = require("../../controllers/placesindex.jsx"); // Update the path accordingly

module.exports = function index(data) {
  return <placesindex data={data} />;
};

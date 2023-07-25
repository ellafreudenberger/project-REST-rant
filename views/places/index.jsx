// index.jsx
const React = require("react");
const placesindex = require("../../controllers/placesindex.jsx"); // Update the path accordingly

module.exports = function index(data) {
  return <placesindex data={data} />;
};

let placesFormatted = data.places.map((place, index) => {
  return (
    <div className="col-sm-6">
      <h2>
        <a href={`/places/${index}`} >
          {place.name}
        </a>
      </h2>
      <p className="text-center">
        {place.cuisines}
      </p>
      <img src={place.pic} alt={place.name} />
      <p className="text-center">
        Located in {place.city}, {place.state}
      </p>
    </div>
  )
})

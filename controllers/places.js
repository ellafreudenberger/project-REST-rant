// ./controllers/places.js
const router = require('express').Router();
const PlacesIndex = require('./placesindex.jsx'); // Use the .jsx extension and correct casing

const places = require('../modules/places.js');

router.get('/', (req, res) => {
  const data = { places };
  const placesFormatted = index(data); // Call the index function to format places data
  res.render('places/index', { placesFormatted });
});

module.exports = router;


function index(data) {
  const placesFormatted = data.places.map((place) => {
    return (
      <div className="col-sm-6" key={place.name}> {/* Add a unique key prop */}
        <h2>{place.name}</h2>
        <p className="text-center">
          {place.cuisines}
        </p>
        <img src={place.pic} alt={place.name} />
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    );
  });

  return (
    <Def> {/* Assuming Def is the component that wraps placesFormatted */}
      <main>
        <h1>Places to Rant or Rave About</h1>
        <div className="row">
          {placesFormatted}
        </div>
      </main>
    </Def>
  );
}

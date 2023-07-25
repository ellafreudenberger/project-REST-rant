const React = require("react");

function Def({ children }) {
  return <div>{children}</div>;
}

function index(data) {
  const placesFormatted = data.places.map((place) => {
    return (
      <div className="col-sm-6" key={place.id}>
        <h2>
          <a href={`/places/${place.id}`}>
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
    );
  });

  return (
    <Def>
      <main>
        <h1>Places to Rant or Rave About</h1>
        <div className="row">
          {placesFormatted}
        </div>
      </main>
    </Def>
  );
}

module.exports = index;

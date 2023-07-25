const React = require('react');
const Def = require('../default');

function Show(data) {
  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">
            <img src={data.place.pic} alt={data.place.name} />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
          <div className="col-sm-6">
            <h2>Description</h2>
            <h3>{data.place.showEstablished()}</h3>
            <h4>Serving {data.place.cuisines}</h4>
            <h1>{data.place.name}</h1>
            <div className="Rating Section">
              <h2>Rating</h2>
              <h3>Currently Unrated</h3>
            </div>
            <div className="Comments Section">
              <h2>Comments</h2>
              <h3>No comments yet!</h3>
            </div>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
              Edit
            </a>
            <form action={`/places/${data.place._id}/comments`} method="POST">
  <div>
    <label htmlFor="author">Author:</label>
    <input type="text" id="author" name="author" required />
  </div>
  <div>
    <label htmlFor="content">Content:</label>
    <textarea id="content" name="content" required></textarea>
  </div>
  <div>
    <label htmlFor="starRating">Star Rating:</label>
    <input type="number" id="starRating" name="starRating" step="0.5" required />
  </div>
  <div>
    <label htmlFor="rant">Rant:</label>
    <input type="checkbox" id="rant" name="rant" />
  </div>
  <div>
    <button type="submit">Submit</button>
  </div>
</form>

          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = Show;

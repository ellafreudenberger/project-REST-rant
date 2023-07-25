const React = require('react');
const Def = require('../default');

function Show(data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  );

  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <strong>- {c.author}</strong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      );
    });
  }

  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
  );

  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars;
    }, 0);
    let averageRating = Math.round(sumRatings / data.place.comments.length);
    let stars = '';
    for (let i = 0; i < averageRating; i++) {
      stars += '⭐️';
    }
    rating = (
      <h3>
        {stars} stars
      </h3>
    );
  }

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
              {rating}
              <br />
            </div>
            <div className="Comments Section">
              <h2>Comments</h2>
              {comments}
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

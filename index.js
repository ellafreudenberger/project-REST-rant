// Babel for modern JavaScript syntax support in Node.js
require('@babel/register');
require('dotenv').config();

// Modules and Globals
const express = require('express');
const methodOverride = require('method-override');

// Create an Express app
const app = express();

// Express Settings
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Controllers & Routes
app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('*', (req, res) => {
  res.render('error404');
});

// Listen for Connections
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// new comments
app.post('/places/:id/comments', (req, res) => {
    const placeId = req.params.id;
    const { author, content, starRating, rant } = req.body;
  
    // Logging the data received in the req.body
    console.log('Received form data:');
    console.log('Author:', author);
    console.log('Content:', content);
    console.log('Star Rating:', starRating);
    console.log('Rant:', rant);
  
    const newComment = {
      author: author || 'Anonymous',
      content: content || '',
      starRating: parseFloat(starRating) || 0,
      rant: rant === 'on',
    };
  
    console.log('New Comment:', newComment);
  
    res.redirect(`/places/${placeId}`);
  });
  
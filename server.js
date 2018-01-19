// Setup environment variables
require('dotenv').config({ silent: true });

// Setup dbUrl and port
const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost/blog-project-backend';
const port = process.env.PORT || 4000;

// Installng modules
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

// Init App
const app = express();

// Connecting to mongoDB via Mongoose
mongoose.Promise = global.Promise;
mongoose.connect(dbUrl)
.then(
  () => console.log(`Connected to database at: ${dbUrl}`),
  (err) => console.log(err)
);

// Middlewares
app.use((req, res, next) => {
  console.log("Method: " + req.method + " Path: " + req.url);
  next();
});


// Requiring routes
const home_routes = require('./routes/home_routes');
const posts_routes = require('./routes/posts_routes');

// Routes
app.use('/', home_routes);
app.use('/posts', posts_routes);

// Listening
app.listen(port, () => console.log(`Server is running on port: ${port}`));

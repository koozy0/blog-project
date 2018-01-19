const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  // Testing
  res.send('testing home routes...')
  // if logged in, send posts
});

module.exports = router;

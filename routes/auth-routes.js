const express = require('express');
const router = express.Router();

// auth login
router.get('/login', (request, response) => {
  response.render('login')
});

// auth logout
router.get('/logout', (request, response) => {
  response.send('logging out')
})

// auth with google
router.get('/google', (request, response) => {
  // TODO: handle with passport
  response.send('logging in with google')
});

module.exports = router;
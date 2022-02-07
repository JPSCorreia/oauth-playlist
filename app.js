const express = require('express');
const app = express();
const port = 3000;
const authRoutes = require('./routes/auth-routes');

// setup view gine
app.set('view engine', 'ejs');

// setup routes
app.use('/auth', authRoutes);

// home route
app.get('/', (request, response) => {
  response.render('home')
})


// start server
app.listen(port, () => {
  console.log(`Server starting on port ${port}`)
})
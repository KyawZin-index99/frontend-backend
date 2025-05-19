const express = require('express');
const path = require('path');
const app = express();


// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Backend route for '/hello'
app.get('/hello', (req, res) => {
  res.send('Hello, Ko Soe!');
});

// Start the server
const port = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Listening on port ${port}...`));



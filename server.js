const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

// Initializing the port for the server and heroku
var port = process.env.PORT || 5000;
// Initializing the express module
app = express();
app.use(serveStatic(__dirname + '/dist'));

// Serving the index.html file using the * command for the refreshing of the page and the routes
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

// Intializing the app to listen on the specified port
app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});

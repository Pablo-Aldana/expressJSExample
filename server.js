'user strict'

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const routes = require('./controllers/routes');
routes(app);
app.listen(port, function() {
   console.log('Server started on port: ' + port);
});
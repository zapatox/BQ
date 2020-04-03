const express = require('express')
const path = require('path');
const app = express()
var router = express.Router();

// define the home page route
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/../front/index.html'))
});
// define the about route
router.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname+'/../front/'+req.originalUrl));
});
app.use(router);
app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
});

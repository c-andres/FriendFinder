const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const PORT =  4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



app.listen(PORT, function() {
  console.log('App listening on PORT: ' + PORT);
});

var train = require('express-train');

module.exports = train(__dirname, function(err, app){
    app.start();
});
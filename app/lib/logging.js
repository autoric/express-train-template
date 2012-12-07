var winston = require('winston');

module.exports = function(app) {
    app.log = winston;
}
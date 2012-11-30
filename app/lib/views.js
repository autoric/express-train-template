var hbs = require('express-hbs');

module.exports = function (app) {

    //set up view engine
    app.set('view engine', 'hbs');

    app.engine('hbs', hbs.express3({
        partialsDir:app.dir + "/views/partials"
    }));

    // Static locals
    app.locals({
        title: app.constants.name
    });
};
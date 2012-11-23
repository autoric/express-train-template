//var resource = require('express-resource');

module.exports = function (app) {

    // Home
    //app.resource(app.controllers.home);
    app.get('/', app.controllers.home.index);

    //Generic restful api for all models - if previous routes are not matched, will fall back to these
    //See libs/params.js, which adds param middleware to load & set req.Model based on :model argument
    app.get('/api/:model', app.controllers.api.search);
    app.post('/api/:model', app.controllers.api.create);
    app.get('/api/:model/:id', app.controllers.api.read);
    app.post('/api/:model/:id', app.controllers.api.update);
    app.del('/api/:model/:id', app.controllers.api.destroy);

};
'use strict';

module.exports = function(app) {
	// Routing logic   
	// ...
    var translator = require('../controllers/translator.server.controller.js');
    app.route('/trans').post(translator.translate);
};
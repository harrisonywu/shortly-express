const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
    var cookie = req.cookies
        models.Sessions.create()
        .then(function(newCookie) {
            req.cookie = newCookie
        })
    next();
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/


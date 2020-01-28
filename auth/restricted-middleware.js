const bcrypt = require('bcryptjs');

const Users = require('../users/routes-model');

module.exports = (req, res, next) => {
    if (req.session && req.session.user) {
        next();
    } else {
        res.status(401).json({ message: 'You are not authorized' });
    }
}; 
var config = require('../config'),
    jwt = require('jsonwebtoken'),
    bcrypt = require('bcryptjs'),
    connection = config.db.get;

var user = {
    details: function(req, res, next) {
        res.send('DETAILS OF: ' + req.params.email);
        next();
    },
    register: function(req, res, next) {
        var hashedPassword, jwtPayload, token;
        connection.query('SELECT email from `users` WHERE email=?;', [req.body.email], (error, results, fields) => {
            if(error) throw error;
            if(results.length === 0) {
                hashedPassword = bcrypt.hashSync(req.body.password, 8);
                connection.query('INSERT INTO `users` VALUES(null, ?, ?);', [req.body.email, hashedPassword], (error, results, fields) => {
                    if(error) throw error;
                    jwtPayload = {
                        email: req.body.email
                    };
                    token = jwt.sign(jwtPayload, config.jwtKey, {
                                        expiresIn: 1440 // expires in 24 hours
                                    });
                    res.status(201);
                    res.send({
                        auth: true,
                        token: token
                    });
                });
            } else {
                res.status(400);
                res.send('Email is already in use.');
            };
        });
        next();
    },
    login: function(req, res, next) {
        var jwtPayload, token;
        connection.query('SELECT password from `users` WHERE email=?;', [req.body.email], (error, results, fields) => {
            if(error) throw error;
            if(results.length === 0 || !(bcrypt.compareSync(req.body.password, results[0].password))) {
                res.status(401);
                res.send({auth: false, token: null});
            } else {
                jwtPayload = {
                    email: req.body.email
                };
                token = jwt.sign(jwtPayload, config.jwtKey, {
                                    expiresIn: 1440 // expires in 24 hours
                                });
                res.status(200);
                res.send({
                    auth: true,
                    token: token
                });
            };
        });
        next();
    }
};

module.exports = user;

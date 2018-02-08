var user = {
  details: function(req, res, next) {

  },
  add: function(req, res, next) {
      res.send('hello ' + req.params.name);
      next();
  }
};

module.exports = user;

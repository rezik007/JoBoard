var config = require('./config'),
    restify = require('restify'),
    user = require('./modules/user');

var server = restify.createServer({
  name    : config.name,
  version : config.version,
  url : config.hostname
});
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.listen(3001, function() {
console.log('%s listening at %s', server.name, server.url);
});

// user routes --------------------------
server.get(config.apiPath + '/user/:id', user.details);
server.post(config.apiPath + '/user', user.add);

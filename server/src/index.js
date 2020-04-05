const http = require('http');
const controller = require('./configServer/socket');
const handlerError = require('./handlerError/handler');
const {app, PORT} = require('./configServer/express/');

const server = http.createServer(app);

server.listen(PORT);
controller.createConnection(server);



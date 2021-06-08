import restify from 'restify';

const server = restify.createServer();

server.listen(8080, function () {
  console.log('\x1b[35m %s \x1b[37mlistening at \x1b[94m %s', server.name, server.url);
});
server.use(
  restify.plugins.bodyParser({
    mapParams: true,
  })
);

export default server;

import './routes';
import server from '@config/server';

const respond = (req, res, next) => {
  res.end(
    '<html><meta charset="utf-8"><body><h1>Restify API</h1> <h2>Faça login para ter acesso aos dados da API</h2> </body></html>'
  );
  next();
};

server.get('/', respond);

// server.on('NotFound', function (req, res, err, cb) {
//   // err.toString = function toString() {
//   //   return 'an internal server error occurred!';
//   // };
//   // for any response that is application/json
//   res.end(
//     '<html><meta charset="utf-8"><body><h1>Restify API</h1> <h2>Faça login para ter acesso aos dados da API</h2> </body></html>'
//   );
//   return cb();
// });



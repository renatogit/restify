import server from '@config/server'

const respond = (req, res, next) => {
  res.send("Restify API");
  next();
}

server.get('/', respond);

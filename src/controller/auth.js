import bcrypt from 'bcrypt';
import User from '@model/user';
import jwt from 'jsonwebtoken';

const privateKey = process.env.SECRET;

// TODO recuperar senha, usar decoder
// const decoded = jwt.verify(token, privateKey);
// melhorar essa condicao

export const login = async (req, res, next) => {
  const { userName, password } = req.params.data;
  const user = await User.findOne({ userName }).exec();

  if (user) {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const token = jwt.sign({ userName, password }, privateKey, { expiresIn: 300 });
      res.send(200, { auth: true, token });
      return next();
    } else {
      res.send(401, 'Not authorized!!!');
      return next(false);
    }
  }

  res.send(401, 'User not found!!!');
  return next(false);
};

export const logout = async (req, res, next) => {
  res.send({ auth: false, token: null });
  next();
};

export const verifyJWT = async (req, res, next) => {
  const token = req.headers['Authorization'];
  const url = req.url === '/login' || req.url === '/';
  if (url) return next();
  if (!token) return res.send(401, { auth: false, message: 'No token provided.' });

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) return res.send(500, { auth: false, message: 'Failed to authenticate token.' });
    // se tudo estiver ok, salva no request para uso posterior
    req.user = decoded;
    next();
  });
};

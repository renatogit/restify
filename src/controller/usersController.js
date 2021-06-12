import User from '@model/user';
import { cryptography } from '@utils';

// GET /user
export const getUser = async (req, res, next) => {
  const user = await User.find({});
  res.send(user);
  next();
};

// GET user/id
export const getUserById = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  res.send(user);
  next();
};

// POST user
export const createUser = async (req, res, next) => {
  const password = cryptography(req.params.data.password);
  let data = req.params.data;
  data.password = password;
  const user = new User(data);
  const userById = await User.findOne({ userName: req.params.data.userName }).exec();

  if (!!userById) {
    res.send('O usuario já está cadastrado da base de dados!!!');
  } else {
    await user.save((err) => {
      if (err) return console.log(err);
      res.send(`Usuário ${data.firstName} cadastrado com sucesso!!!`);
    });
  }
  next();
};

// PUT user/id
export const updateUser = async (req, res, next) => {
  const user = await User.updateOne({ _id: req.params.id }, req.params.data);
  res.send(user);
  next();
};

// DEL user/id
export const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  let response = '';
  if (!!user) {
    await User.deleteOne({ _id: req.params.id });
    response = `Usuário ${user.firstName} deletado com sucesso`;
  } else {
    response = 'Nāo foi possível deletar o usuário. Usuário nāo encontrado!';
  }
  res.send(204, response);
  next();
};

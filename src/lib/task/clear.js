import User from '@model/user';

(async function user() {
  await User.deleteMany({});
  console.log('Dados removidos com sucesso !!!');
})()

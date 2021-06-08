import bcrypt from 'bcrypt';

export const random = (min, max) => {
  const result = Math.floor(Math.random() * max) + min;
  return result;
};

export const cryptography = (attr) => {
  const saltRounds = 9;
  const hash = bcrypt.hashSync(attr, saltRounds);
  return hash
};

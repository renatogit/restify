import mongoose from '@config/db';

mongoose.set('useCreateIndex', true);
const emailSchema = mongoose.Schema({
  address: {
    type: String,
    trim: true,
  },
  city: { type: String, trim: true },
  postalCode: { type: String, trim: true },
  state: { type: String, trim: true },
  country: { type: String, trim: true },
});

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  cpf: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  address: emailSchema,
  area: [],
  professionalPosition: [],
});

const User = mongoose.model('User', userSchema);
export default User;

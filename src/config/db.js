import mongoose from 'mongoose';

const uri = 'mongodb://localhost:27017/kof';
mongoose.connect(uri, {useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true }).catch((error) => error);

export default mongoose;

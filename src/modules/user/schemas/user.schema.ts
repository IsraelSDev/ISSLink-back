import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  email: String,
  password: String,
  firstName: String,
  lasName: String,
  picturePath: String,
});

export default model('User', userSchema);

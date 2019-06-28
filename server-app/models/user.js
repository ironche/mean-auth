import { Schema, model } from 'mongoose';
import { compareSync, hashSync } from 'bcryptjs';

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    alias: 'email'
  },
  password: {
    type: String,
    required: true
  },
  displayName: String,
  fullName: String,
  phone: String,
  group: String,
  createdOn: {
    type: Date,
    default: Date.now
  }
});

UserSchema.methods.checkPassword = compareSync;

UserSchema.methods.hashPassword = function() {
  this.password = hashSync(this.password, 10);
}

UserSchema.methods.maskPassword = function() {
  this.password = '**********';
}

const User = model('User', UserSchema);

export { User };

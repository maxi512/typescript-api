import { Schema, model } from 'mongoose';
import IUser from '../repositories/IUser';

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String
});

// 3. Create a Model.
export default model<IUser>('User', userSchema);


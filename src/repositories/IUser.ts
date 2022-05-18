import { Document } from 'mongoose';

export default interface IUser extends Document {
    name: string;
    email: string;
    avatar?: string;
  // eslint-disable-next-line semi
};
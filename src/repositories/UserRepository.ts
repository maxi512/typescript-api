import User from '../repositories/User';
import IUser from './IUser';
export default class UserRepository {

    async getAll(): Promise<Array<IUser>> {
        return await User.find();
    }

    async getFirst(): Promise<IUser> {
        return await User.findById('6268884d4cf42f5e8bc09742');
    }

    async getById(id: string): Promise<IUser> {
        try {
            return await User.findById(id);
        } catch (error) {
            throw 'User not found or invalid id';
        }
    }

    async create(user: IUser): Promise<IUser> {
        try {
            return await User.create(user);
        } catch (error) {
            throw error.message;
        }
    }

    async updateUser(id: string, user: IUser): Promise<IUser> {
        return await User.findByIdAndUpdate(id, user);
    }

    async deleteUser(id: string): Promise<IUser> {
        try {
            return await User.findByIdAndDelete(id);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
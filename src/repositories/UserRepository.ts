import User from '../repositories/User';
import IUser from './IUser';
export default class UserRepository {

    async getAll(): Promise<Array<IUser>> {
        return await User.find();
    }

    public getFirst(): any {
        return {};
    }
}
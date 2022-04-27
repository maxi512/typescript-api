import { autoInjectable } from 'tsyringe';
import UserRepository from '../repositories/UserRepository';
import IUser from '../repositories/IUser';

@autoInjectable()
export default class UserService {
    private readonly userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public async getAllUsers(): Promise<Array<IUser>> {
        return this.userRepository.getAll();
    }

    public getFirst(): Number {
        return this.userRepository.getFirst();
    }
}
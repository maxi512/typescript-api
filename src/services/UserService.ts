import { autoInjectable } from 'tsyringe';
import UserRepository from '../repositories/UserRepository';
import IUser from '../repositories/IUser';

@autoInjectable()
export default class UserService {
    private readonly userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public getAllUsers(): Promise<Array<IUser>> {
        return this.userRepository.getAll();
    }

    public getFirst(): Promise<IUser> {
        return this.userRepository.getFirst();
    }

    public createUser(user: IUser): Promise<IUser> {
        return this.userRepository.create(user);
    }
}
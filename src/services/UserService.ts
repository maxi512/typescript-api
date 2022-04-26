import { autoInjectable } from 'tsyringe';
import UserRepository from '../repositories/UserRepository';

@autoInjectable()
export default class UserService {
    private readonly userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public getAllUsers(): Array<Number> {
        return this.userRepository.getAll();
    }

    public getFirst(): Number {
        return this.userRepository.getFirst();
    }
}
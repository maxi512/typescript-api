import { autoInjectable } from 'tsyringe';
import UserService from '../services/UserService';

@autoInjectable()
export default class UserController {
    userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    getAllUsers = async (_req, res) => {
        const users = await this.userService.getAllUsers();
        res.send({users});
    };

    getFirst = (_req, res) => {
        const user = this.userService.getFirst();
        res.send(user + 'ASD');
    };

}
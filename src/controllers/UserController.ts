import { autoInjectable } from 'tsyringe';
import UserService from "../services/UserService";

@autoInjectable()
export default class UserController {
    userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    getAllUsers = (_req, res) => {
        const users = this.userService.getAllUsers();
        res.send(users);
    }

}
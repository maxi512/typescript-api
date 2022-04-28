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

    createUser = async (req, res) => {
        try {
            const user = await this.userService.createUser(req.body);
            res.send({user});
        }
        catch (error) {
            res.status(400).send({error});
        }
    };

    getById = async (req, res) => {
        try {
            const user = await this.userService.getById(req.params.id);
            res.send({user});
        }
        catch (error) {
            res.status(400).send({error});
        }
    };

    updateUser = async (req, res) => {
        try {
            const user = await this.userService.updateUser(req.params.id, req.body);
            res.send({user});
        }
        catch (error) {
            res.status(400).send({error});
        }
    };
}
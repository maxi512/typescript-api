import { Router } from 'express';
import { autoInjectable } from 'tsyringe';
import  UserController  from '../controllers/UserController';

@autoInjectable()
export default class UsersRouter {
    userController: UserController;
    router: Router;

    constructor(userController: UserController) {
        this.userController = userController;
        this.router = Router();
        this.addRoutes();
    }

    addRoutes() {
        this.router.get('/', this.userController.getAllUsers);
        this.router.get('/first', this.userController.getFirst);
        this.router.post('/', this.userController.createUser);
        this.router.get('/:id', this.userController.getById);
        this.router.put('/:id', this.userController.updateUser);
        this.router.delete('/:id', this.userController.deleteUser);
    }
}

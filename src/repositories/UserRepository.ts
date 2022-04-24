export default class UserRepository {
    users: Array<Number> = [1, 2, 3, 4, 5];

    public getAll(): Array<Number> {
        return this.users
    }
}
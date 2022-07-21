import bcryptjs from "bcryptjs";
import { faker } from "@faker-js/faker";

class UserService {
    constructor() {
        this.users = []
        this.generate()
    }
    generate() {
        const limit = 100
        for (let index = 0; index < limit; index++) {
            this.users.push({
                id: faker.datatype.uuid(),
                name: `${faker.name.firstName()}  ${faker.name.lastName()}`,
                username: `@${faker.internet.userName()}`,
                email: faker.internet.email(),
                passwor: bcryptjs.hashSync(faker.internet.password()),
                avatar: faker.internet.avatar()
            });
        }
    }
    find() {
        return this.users;
    }
    findOne() { }
    findById(id) {
        return this.users.find(item => item.id === id)
    }
    create(name, username, email, password) {
        const newUser = {
            id: faker.datatype.uuid(),
            name,
            username,
            email,
            password: bcryptjs.hashSync(password),
            avatar: faker.internet.avatar()
        }
        this.users.push(newUser)
        return newUser
    }
    update(id, changes) {
        const index = this.users.findIndex(item => item.id === id)
        if (index === -1) {
            throw new Error('usuario not found')
        }
        const user = this.users[index]
        this.users[index] = {
            ...users,
            ...changes
        }
        return this.users[index]
    }
    remove() { }
}

export default UserService

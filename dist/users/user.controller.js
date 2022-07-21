import { request, response } from "express";
import UserService from "./user.service.js";
const service = new UserService()

class UsersController {
    constructor() {
    }
    async findAll(req = request, res = response) {
        const users = service.find()
        res.status(200).json(users)
    }
    async findOne(req = request, res = response) {
        const { id } = req.params
        const user = service.findById(id)
        res.status(200).json(user)
    }
    async create(req = request, res = response) {
        const { name, username, email, password } = req.body
        const newUser = service.create(name, username, email, password)
        res.status(201).json(newUser)
    }
}
export default UsersController

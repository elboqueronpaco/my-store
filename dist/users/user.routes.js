import { Router } from "express";
import UsersController from "./user.controller.js";

const controller = new UsersController()

const router = Router()

router.get('/', controller.findAll)
router.get('/:id', controller.findOne)
router.post('/', controller.create)


export default router

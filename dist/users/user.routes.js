import { Router } from "express";
import { allUsers, oneUser } from "./user.controller.js";

const router = Router()

router.get('/', allUsers)
router.get('/:id', oneUser)

export default router

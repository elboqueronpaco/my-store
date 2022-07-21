import { Router } from "express"
import usersRouter from '../users/index.js'

const routerApi = app => {
    const router = Router()
    app.use('/api/v1', router)
    router.use('/', usersRouter)
}
export default routerApi

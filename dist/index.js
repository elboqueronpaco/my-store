import express, { json, urlencoded } from 'express'
import configApi from "../config/config.js";
import userRouter from './users/index.js'

const port = configApi.api.port
const app = express()
app.use(json())
app.use(urlencoded({ extended: true }))

app.use('/api/v1', userRouter)
app.get('/api/v1', (req, res) => {
    res.json('Bienvenido a mi api rest')
})

const ApiServer = async () => {
    await app.listen(port)
}
ApiServer()
console.log(`Servido corriendo por http://localhost:${port}/api/v1`)

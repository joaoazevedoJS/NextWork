import { Router } from 'express'

const routes = Router()

routes.get('/', (req, res) => res.json({ msg: "hello world" }))

export default routes
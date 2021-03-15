import {Router} from 'express'
import { hello } from './helloController'

const helloRouter = Router()

helloRouter.get('/hello', hello)

export default helloRouter;

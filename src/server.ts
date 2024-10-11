import express, { Router } from 'express'
import { UserController } from './controllers/user-controller'
import { createUserSchema } from './dtos/create-user-dto'
import { createValidator } from './middlewares/create-validator'
import { roleValidator } from './middlewares/role-validator'
import { RoleEnum } from './types/enum'

const app = express()

const route = Router()

// Adiciona o middleware de rota ao express
app.use(express.json())

const has = roleValidator

const userController = new UserController()

route.post('/user', has([RoleEnum.USER_CREATE]), createValidator(createUserSchema), userController.create)
route.put('/user/:id', has([RoleEnum.USER_UPDATE]), createValidator(createUserSchema), userController.update)
route.delete('/user/:id', has([RoleEnum.USER_DELETE]), userController.delete)
route.get('/user', has([RoleEnum.USER_LIST]), createValidator(createUserSchema), userController.list)
route.get('/user/:id', has([RoleEnum.USER_SHOW]), userController.show)

app.use('/api', route)

app.listen(3000, () => 'Server running on port 3000')
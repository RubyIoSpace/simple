import { Router } from "express"
import { createValidator } from "../../middlewares/create-validator"
import { roleValidator } from "../../middlewares/role-validator"
import { RoleEnum } from "../../types/enum"
import { UserController } from "./controllers/user-controller"
import { createUserSchema } from "./dtos/create-user-dto"
import { updateUserSchema } from "./dtos/update-user-dto"

const has = roleValidator
const userController = new UserController()
const userRouter = Router()

userRouter.post('/', createValidator(createUserSchema), userController.create)

// userRouter.use(authMiddleware);

userRouter.put('/:id', has(RoleEnum.USER_UPDATE), createValidator(updateUserSchema), userController.update)
userRouter.delete('/:id', has(RoleEnum.USER_DELETE), userController.delete)
userRouter.get('/', has(RoleEnum.USER_LIST), userController.list)
userRouter.get('/:id', has(RoleEnum.USER_SHOW), userController.show)

export default userRouter

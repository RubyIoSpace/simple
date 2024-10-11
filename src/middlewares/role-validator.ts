import { NextFunction, Request, Response } from "express"
import { RoleEnum } from "../types/enum"

export const roleValidator = (schema: string[]) => {
    return (req: Request, res: Response, next: NextFunction): void => {

        // const { roles } = req.user
        const roles = [RoleEnum.USER_CREATE, RoleEnum.USER_DELETE, RoleEnum.USER_UPDATE, RoleEnum.USER_LIST, RoleEnum.USER_SHOW]

        const hasRole = roles.some(role => schema.includes(role))

        if (!hasRole) {
            res.status(403).json({ message: 'Not authorized' })

            return;
        }

        next()
    }
}
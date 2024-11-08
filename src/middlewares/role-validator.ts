import { NextFunction, Request, Response } from "express"
import { RoleEnum } from "../types/enum"

export const roleValidator = (...roles: RoleEnum[]) => {
    return (req: Request, res: Response, next: NextFunction): void => {

        // const { roles } = req.user
        const userRoles = [RoleEnum.USER_CREATE, RoleEnum.USER_DELETE, RoleEnum.USER_UPDATE, RoleEnum.USER_LIST, RoleEnum.USER_SHOW]

        const hasRole = userRoles.some(role => roles.includes(role))

        if (!hasRole) {
            res.status(403).json({ message: 'Not authorized' })

            return;
        }

        next()
    }
}
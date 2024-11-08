import { NextFunction, Request, Response } from "express"
import { AnyObjectSchema, ValidationError } from "yup"

export const createValidator = (schema: AnyObjectSchema) => {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            await schema.validate(req.body, {
                // retorna todos os erros de uma vez
                abortEarly: false,
                // remove campos que não estão no schema
                stripUnknown: true,
            });

            next()
        } catch (error) {
            if (error instanceof ValidationError) {
                res.status(422).json({ messages: error.errors })

                return
            }
            
            res.status(500).json({ message: 'Internal server error' })
        }
    }
}
import { TSchema } from '@sinclair/typebox'
import { Value, ValueError } from '@sinclair/typebox/value'
import { NextFunction, Request, Response } from "express"

/**
 * Transforma a mensagem de erro em um formato mais legível
 * 
 * @param error 
 * @returns 
 */
function transformMessage(error: ValueError) {
    const { message, path } = error

    return `${path.slice(1)} ${message.toLowerCase()}`
}

export const createValidator = <T extends TSchema>(schema: T) => {
    return (req: Request, res: Response, next: NextFunction): void => {
        const messages = [...Value.Errors(schema, req.body)]

        if (messages.length > 0) {
            res.status(400).json({ messages: messages.map(transformMessage) })

            return;
        }

        next()
    }
}
import { Request, Response } from "express"

export class UserController {
    async create(req: Request, res: Response) {
        res.status(201).send({ id: 1 })
    }

    async update(req: Request, res: Response) {
        res.status(204).send()
    }

    async delete(req: Request, res: Response) {
        res.status(204).send()
    }

    async list(req: Request, res: Response) {
        res.status(200).send([])
    }

    async show(req: Request, res: Response) {
        res.status(200).send({ id: 1 })
    }
}
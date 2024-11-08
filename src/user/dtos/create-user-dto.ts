import { InferType, object, string } from 'yup'

export const createUserSchema = object({
    name: string().required(),
    email: string().email().required(),
    password: string().required(),
})

export type CreateUserDto = InferType<typeof createUserSchema>

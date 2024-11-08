import { InferType, object, string } from 'yup'

export const updateUserSchema = object({
    name: string().required(),
    email: string().email().required(),
    password: string().required(),
})

export type UpdateUserDto = InferType<typeof updateUserSchema>

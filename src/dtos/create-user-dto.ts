import { Static, Type } from "@sinclair/typebox"

export const createUserSchema = Type.Object({
    name: Type.String({maxLength: 255}),
    email: Type.String({
        format: "email",
        maxLength: 255
    }),
    password: Type.Intersect([
        Type.String({
            minLength: 8
        })
    ])
})

export type CreateUserDto = Static<typeof createUserSchema>

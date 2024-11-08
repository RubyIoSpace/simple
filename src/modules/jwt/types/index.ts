import { JwtPayload as BaseJwtPayload } from 'jsonwebtoken'

export interface JwtPayload extends BaseJwtPayload {
    sub: string
    name: string
    email: string
}

export interface JwtRefreshTokenPayload {
    sub: string
}
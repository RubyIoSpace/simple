import jwt from 'jsonwebtoken'
import { config } from '../../../config'
import { JwtPayload, JwtRefreshTokenPayload } from '../types'

// Função para gerar o JWT de acesso
export const generateAccessToken = (payload: JwtPayload) => {
  return jwt.sign(payload, config.jwt.secretKey, { expiresIn: config.jwt.expirationTime });
};

// Função para gerar o JWT de refresh
export const generateRefreshToken = (payload: JwtRefreshTokenPayload) => {
  return jwt.sign(payload, config.jwt.refreshSecretKey, { expiresIn: config.jwt.refreshExpirationTime });
};

// Função para verificar o JWT de acesso
export const verifyAccessToken = (token: string) => {
  return jwt.verify(token, config.jwt.secretKey);
};

// Função para verificar o JWT de refresh
export const verifyRefreshToken = (token: string) => {
  return jwt.verify(token, config.jwt.refreshSecretKey);
};
export const config = {
    port: process.env.PORT ,
    jwt: {
        secretKey: process.env.JWT_SECRET_KEY!,
        refreshSecretKey: process.env.JWT_REFRESH_SECRET_KEY!,
        expirationTime: process.env.JWT_EXPIRATION_TIME!,
        refreshExpirationTime: process.env.JWT_REFRESH_EXPIRATION_TIME!
    }
}


// const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY!;
// const JWT_REFRESH_SECRET_KEY = process.env.JWT_REFRESH_SECRET_KEY!;
// const JWT_EXPIRATION_TIME = process.env.JWT_EXPIRATION_TIME!;
// const JWT_REFRESH_EXPIRATION_TIME = process.env.JWT_REFRESH_EXPIRATION_TIME!;
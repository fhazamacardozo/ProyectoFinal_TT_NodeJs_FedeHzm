import jwt from 'jsonwebtoken';
import 'dotenv/config';

const SECRET_KEY = process.env.JWT_SECRET_KEY

export const generateToken = (userData) => {
    const user = {
        id: userData.id,
        email: userData.email,
        role: userData.role
    };
    const expiration = {expiresIn: '1h'};
    return jwt.sign(user, SECRET_KEY, expiration);
}
import { generateToken } from "../utils/tokenGenerator.js";

const users = [
    {
        id: 1, 
        email: 'test@gmail.com',
        password: "123456",
        role: 'admin'
    },
    {
        id: 2, 
        email: 'user@gmail.com',
        password: "abcdef",
        role: 'user'
    }
]

class AuthController {
    async login(req, res) {
        const { email, password } = req.body;
        const user = users.find(u => u.email === email && u.password === password);
        if (!user) {
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }
        const token = generateToken(user);
        res.json({ token });
    }
}
export default new AuthController();
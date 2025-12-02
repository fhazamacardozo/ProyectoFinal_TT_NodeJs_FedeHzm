import express from 'express';
import config from './src/config/Config.js';
import ProductRoutes from './src/routes/ProductRoutes.js';
import AuthRoutes from './src/routes/AuthRoutes.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', AuthRoutes);
app.use('/api', ProductRoutes);
app.get('/', (req, res) => {
    res.send(`
        <h2>API Endpoints</h2>
        <ul>
            <li>GET /api/products - Listar productos</li>
            <li>GET /api/products/:id - Obtener producto por ID</li>
            <li>POST /api/products/create - <strong>Requiere autenticación</strong></li>
            <li>DELETE /api/products/:id - <strong>Requiere autenticación</strong></li>
        </ul>
        <h3>Autenticación</h3>
        <ul>
            <li>POST /auth/login - Obtener token JWT</li>
        </ul>
        <p>Para crear o borrar productos debes estar autenticado. Envía el token JWT en el header <code>Authorization: Bearer &lt;tu_token&gt;</code> en tus peticiones protegidas.</p>
    `);
});
app.use((req, res, next) => {
    res.status(404).json({ error: 'Recurso no encontrado o ruta inválida' });
});

app.listen(config.port, () => {
    console.log(`${config.appName} running on port ${config.port}`);
});

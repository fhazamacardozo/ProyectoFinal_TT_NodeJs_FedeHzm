import express from 'express';
import config from './src/config/Config.js';
import ProductRoutes from './src/routes/ProductRoutes.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', ProductRoutes);
app.get('/', (req, res) => {
    res.send(`
        <h2>API Endpoints</h2>
        <ul>
        <li>GET /api/products - Listar productos</li>
        <li>GET /api/products/:id - Obtener producto por ID</li>
        <li>POST /api/products - Crear producto</li>
        <li>DELETE /api/products/:id - Eliminar producto</li>
        </ul>
    `);
    });
app.use((req, res, next) => {
    res.status(404).json({ error: 'Recurso no encontrado o ruta inválida' });
});

app.listen(config.port, () => {
    console.log(`${config.appName} running on port ${config.port}`);
});

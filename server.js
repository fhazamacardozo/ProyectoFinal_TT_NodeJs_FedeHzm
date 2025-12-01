import express from 'express';
import config from './src/config/Config.js';
import ProductRoutes from './src/routes/ProductRoutes.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', ProductRoutes);
app.use((req, res, next) => {
    res.status(404).json({ error: 'Recurso no encontrado o ruta inválida' });
});

app.listen(config.port, () => {
    console.log(`${config.appName} running on port ${config.port}`);
});

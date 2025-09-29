import { Router } from 'express';
import Controller from '../controllers/Controller.js';

const router = Router();
router.get('/products', Controller.getProducts);
router.get('/products/:id', Controller.getProductById);
router.post('/products', Controller.createProduct);
router.delete('/products/:id', Controller.deleteProduct);

export default router;

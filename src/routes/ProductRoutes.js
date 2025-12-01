import { Router } from 'express';
import ProductController from '../controllers/ProductController.js';

const router = Router();
router.get('/products', ProductController.getProducts);
router.get('/products/:id', ProductController.getProductById);
router.post('/products', ProductController.createProduct);
router.delete('/products/:id', ProductController.deleteProduct);

export default router;

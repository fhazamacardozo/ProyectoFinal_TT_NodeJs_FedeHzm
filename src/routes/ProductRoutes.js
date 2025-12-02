import { Router } from 'express';
import ProductController from '../controllers/ProductController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = Router();
router.get('/products', ProductController.getProducts);
router.get('/products/:id', ProductController.getProductById);
router.post('/products', authenticateToken, ProductController.createProduct);
router.delete('/products/:id', authenticateToken, ProductController.deleteProduct);

export default router;

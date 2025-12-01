import ProductService from '../services/ProductService.js';

class ProductController {
    async getProducts(req, res) {
        const data = await ProductService.getProducts();
        console.log("GET products request received");
        res.status(200).json(data);
    }
    async getProductById(req, res) {
        const { id } = req.params;
        const data = await ProductService.getProductById(id);
        if (data) {
            console.log("GET product by ID request received for ID:", id);
            res.status(200).json(data);
        } else {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        
    }
    async createProduct(req, res) {
        const newProduct = req.body;
        const createdProduct = await ProductService.createProduct(newProduct);
        console.log("Created Product id",createdProduct.id);
        res.status(201).json(createdProduct);
    }
    async deleteProduct(req, res) {
        const { id } = req.params;
        try {
            const product = await ProductService.getProductById(id);
            if (!product) {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }
            await ProductService.deleteProduct(id);
            console.log("Deleted Product id:", id);
            res.status(204).send();
        } catch (error) {
            console.error('Error deleting product:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
}

export default new ProductController();

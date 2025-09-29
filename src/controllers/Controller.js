import Service from '../services/Service.js';

class Controller {
    async getProducts(req, res) {
        const data = await Service.getProducts();
        console.log(data);
        res.json(data);
    }
    async getProductById(req, res) {
        const { id } = req.params;
        const data = await Service.getProductById(id);
        if (!data) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.json(data);
    }
    async createProduct(req, res) {
        const newProduct = req.body;
        const createdProduct = await Service.createProduct(newProduct);
        console.log("Created Product",createdProduct);
        res.status(201).json(createdProduct);
    }
    async deleteProduct(req, res) {
        const { id } = req.params;
        const deleted = await Service.deleteProduct(id);
        if (!deleted) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        console.log("Deleted Product:",deleted);
        res.status(204).send();
    }
}

export default new Controller();

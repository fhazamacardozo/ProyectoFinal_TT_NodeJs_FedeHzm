// src/controllers/exampleController.js

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
        try {
            await Service.deleteProduct(id);
            res.status(204).send();
        } catch (error) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
    }
}

export default new Controller();

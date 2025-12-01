import ProductRepository from '../repositories/ProductRepository.js';

class ProductService {
  getProducts() {
    return ProductRepository.getProducts();
  }
  getProductById(id) {
    return ProductRepository.getProductById(id);
  }
  createProduct(newProduct) {
    return ProductRepository.createProduct(newProduct);
  }
  deleteProduct(id) {
    return ProductRepository.deleteProduct(id);
  }
}

export default new ProductService();

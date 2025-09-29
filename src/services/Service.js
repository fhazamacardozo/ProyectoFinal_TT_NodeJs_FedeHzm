import Repository from '../repositories/Repository.js';

class Service {
  getProducts() {
    return Repository.findProducts();
  }
  getProductById(id) {
    return Repository.findProductById(id);
  }
  createProduct(newProduct) {
    return Repository.createProduct(newProduct);
  }
  deleteProduct(id) {
    return Repository.deleteProduct(id);
  }
}

export default new Service();

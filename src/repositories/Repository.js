//This repository fetches data from the fake store api
// src/repositories/Repository.js
const fakeStoreApiUrl = 'https://fakestoreapi.com/products';
class Repository {
  async findProducts() {
    try{
      const response = await fetch(fakeStoreApiUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }
  async findProductById(id) {
    try {
      const response = await fetch(`${fakeStoreApiUrl}/${id}`);
      if (!response.ok) {
        throw new Error(`API responded with status ${response.status}`);
      }
      const text = await response.text();
      if (!text) {
        // Si la respuesta está vacía, retorna null en vez de lanzar error
        return null;
      }
      const data = JSON.parse(text);
      return data;
    } catch (error) {
      console.error('Error fetching product by ID:', error);
      throw error;
    }
  }
  async createProduct(newProduct) {
    try {
      const response = await fetch(fakeStoreApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  }

  async deleteProduct(id) {
    try {
      const response = await fetch(`${fakeStoreApiUrl}/${id}`, {
        method: 'DELETE',
      });
        if (response.status === 404) {
          // Producto no existe
          throw new Error('Product not found');
        }
        if (!response.ok) {
          throw new Error(`API responded with status ${response.status}`);
        }
        const text = await response.text();
        if (!text) {
          return null;
        }
        const data = JSON.parse(text);
        return data;
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  }
}
export default new Repository();

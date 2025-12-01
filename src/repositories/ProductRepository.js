import {db} from '../data/data.js';
import {
  collection, 
  getDocs, 
  getDoc, 
  addDoc, 
  deleteDoc,
  doc
} from 'firebase/firestore'; 

const productsCollection = collection(db, 'products');

class ProductRepository {
  async getProducts() {
    try{
      const querySnapshot = await getDocs(productsCollection);
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ fsID: doc.id, ...doc.data() });
      });
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }
  async getProductById(id) {
    try {
      const productDoc = await getDoc(doc(productsCollection, id));
      if (!productDoc.exists()) {
        return null;
      }
      return { id: productDoc.id, ...productDoc.data() };
    } catch (error) {
      console.error('Error fetching product by ID:', error);
      throw error;
    }
  }
  async createProduct(newProduct) {
    try {
      const docRef = await addDoc(productsCollection, newProduct);
      const createdProduct = await this.getProductById(docRef.id);
      return createdProduct;
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  }

  async deleteProduct(id) {
    try {
      await deleteDoc(doc(productsCollection, id));
      return true;
    } catch (error) {
      console.error('Error deleting product:', error);
      return false;
    }
  }
}
export default new ProductRepository();

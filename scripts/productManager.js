// Importacion de la clase Product para utilizarla en la clase ProductManager
import { Product } from './product.js';


// Clase para utilizar los productos
export class ProductManager {
    #products;

    constructor() {
        this.#products = [];
        this.loadFromLocalStorage();
    }
    
    // Obtenemos la lista de productos
    listProducts() {
        return this.#products;
    }

    // Agregar producto
    addProduct(product) {
        this.#products.push(product);
        //Lo guardamos en el localStorage para hacer uso de POO y localStorage en la practica
        this.saveToLocalStorage(); 
    }
    

    // Actualizar producto
    updateProductById(id, updateProduct) {
        const index = this.#products.findIndex(product => product.id === id);

        // Si no existe error (es coincidente el index)
        if (index !== -1) {
            this.#products[index] = updateProduct;
            localStorage.removeItem(id); 
            this.saveToLocalStorage(); 
        }

    }

    // Eliminar producto
    deleteProductById(id) {
        const index = this.#products.findIndex(product => product.id === id);

        if (index !== -1) {
            //Metodo slice para eliminar el producto
            this.#products.splice(index, 1);
            localStorage.removeItem(id); 
        }
    }

    // Método para buscar un producto por el nombre del producto que ingrese el usuario
    searchProduct(searchValue){
        const products = this.#products;
        const upperCaseValue = searchValue.toUpperCase();
        const searchItem = products.find((item) => item.name.toUpperCase() === upperCaseValue);
        return searchItem;
    }

    // Guardar los productos en el localStorage por el ID
    saveToLocalStorage() {
        this.#products.forEach(product => {
            localStorage.setItem(product.id, JSON.stringify(product.toJSON()));
        });
    }
    
    // Tenemos que hacer este metodo para cargar los productos en el localStorage
    loadFromLocalStorage() {
        const products = Object.keys(localStorage)
            .filter(key => key !== 'users') 
            .map(key => {
                const data = JSON.parse(localStorage.getItem(key));
                return new Product(data.id, data.name, data.quantity, data.price);
            });
    
        this.#products = products;
    }
    
  
    // Getters y setters
    get products(){
        return this.#products;
    }

    set products(value){
        this.#products = value;
    }

}
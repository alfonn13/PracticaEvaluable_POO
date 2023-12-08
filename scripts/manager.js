//Impotacion de clases necesarias
import { Product } from "./product.js";
import { ProductManager } from "./productManager.js";

//Para ver si estamos editando o no
let editing = false;

let editedProductId = null;
const productManager = new ProductManager();

// Función que realiza todas las operaciones para gestionar los productos
export const manager = () => {
    
    const productForm = document.getElementById("product-form-events");
    const productNameInput = document.getElementById("product-name");
    const productQuantityInput = document.getElementById("product-quantity");
    const productPriceInput = document.getElementById("product-price");
    const addBtn = document.getElementById('addBtn');
    const tableBody = document.getElementById("tbody");

    productForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const productName = productNameInput.value;
        const productQuantity = parseInt(productQuantityInput.value);
        const productPrice = parseFloat(productPriceInput.value);

        // Cuando editamos un producto
        if (editing && editedProductId) {
            // Actualizar el producto ya existente
            const editedProduct = productManager.listProducts().find((product) => product.id === editedProductId);

            // Si existe el producto y los datos son válidos
            if (editedProduct &&productName && !isNaN(productQuantity) && !isNaN(productPrice) &&productQuantity > 0 &&productPrice > 0) {
                editedProduct.name = productName;
                editedProduct.quantity = productQuantity;
                editedProduct.price = productPrice;

                productManager.updateProductById(editedProductId, editedProduct);

                productForm.reset();
                editing = false;
                editedProductId = null;
                addBtn.textContent = 'Agregar Producto';    
            }
        } else {
            if(productName &&!isNaN(productQuantity) && !isNaN(productPrice) &&productQuantity > 0 &&productPrice > 0){
                    const newProduct = new Product(Date.now(), productName, productQuantity, productPrice);
                    productManager.addProduct(newProduct);
                    productForm.reset();
                }          
        }
        listProducts();
    });

    // Hacemos una funcion para ver la tabla de productos
    function listProducts() {
        tableBody.innerHTML = "";
        
        const products = productManager.listProducts(); 
       
        products.forEach((product) => { 
            if(localStorage.key(product.id) !== 'users'){
                const row = document.createElement("tr");
            row.innerHTML = `
                <td>${product.name}</td>
                <td>${product.quantity}</td>
                <td>${product.price}</td>
                <td>
                    <button class="edit-button">Editar</button>
                    <button class="delete-button">Eliminar</button>
                </td>
            `;

            tableBody.appendChild(row);

            const editButton = row.querySelector(".edit-button");
            const deleteButton = row.querySelector('.delete-button');

            editButton.addEventListener("click", () => {
                productNameInput.value = product.name;
                productQuantityInput.value = product.quantity;
                productPriceInput.value = product.price;

                editing = true; 
                editedProductId = product.id; 
                addBtn.textContent = 'Actualizar Producto';
            });

            deleteButton.addEventListener('click', () => {
                productManager.deleteProductById(product.id);
                listProducts();
            });
            }           
        });       
    }

    listProducts();
}

//Exportamos la clase ProductManager
export { productManager};

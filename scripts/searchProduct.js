//Importacion clases necesarias
import { productManager } from "./manager.js";

export const searchItem = () => { 
    const searchBtn = document.getElementById("search-button");
    const searchInput = document.getElementById("searchInput");
    const searchResult = document.getElementById("searchResult");

    //Función de búsqueda de producto
    const searchForItem = () => {
  
      const searchInputValue = searchInput.value;
      const searchItem = productManager.searchProduct(searchInputValue);
      if (searchItem) {
        searchResult.innerHTML = `<p>Nombre: ${searchItem.name}</p>
                                  <p>Cantidad del Producto: ${searchItem.quantity}</p>
                                  <p>Precio del Producto: ${searchItem.price}€</p>`;
      } else {
        searchResult.textContent = "Producto no encontrado";
      }
      //Creamos una clase visibilidad para poder mostrar el resultado de la búsqueda
      searchResult.classList.add("visibilidad"); 
      searchResult.scrollIntoView({behavior: "smooth"});
      
    };
  
    searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
 
    //Si el navegador no soporta viewTransition ejecuta la función de búsqueda
     if(!document.startViewTransition){
        searchForItem();
        return;
      }  
      //Si el navegador soporta viewTransition ejecuta una transición
      document.startViewTransition(() => searchForItem()); 
    });
   
    // Agregamos un evento de clic al botón de búsqueda
    searchInput.addEventListener("keyup", (e) => {
        e.preventDefault();
      if (e.key === "Enter") {
        
        if(!document.startViewTransition){
          searchForItem();
          return;
        }  
        document.startViewTransition(() => searchForItem()); 
        setTimeout(() => {
          searchInput.value = "";
        }, 3000);
      }
    });
  }
  
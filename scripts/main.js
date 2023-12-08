/*
Autor: Alfonso Reviejo Valle
GitHub:https://github.com/alfonn13/PracticaEvaluable_POO
*/

//Importacion clases necesarias
import { manager } from './manager.js';
import { searchItem } from './searchProduct.js';
import { toggleMenu, redirectToIndex } from './menu.js';

document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const logout = document.getElementById("log-out-link");

    menuIcon.addEventListener("click", toggleMenu);
    logout.addEventListener("click", redirectToIndex);

    searchItem();
    manager();
});
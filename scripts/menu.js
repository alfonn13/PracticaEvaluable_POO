//Realizamos el menu para que cuando pulsemos nos salga una pestaña que sea LogOut
const menuIcon = document.getElementById("menu-icon");
const menuDropdown = document.getElementById("menu-dropdown");
const logout = document.getElementById("log-out-link");

export function toggleMenu() {
    menuDropdown.classList.toggle("active");
  }

  // Cambiamos de pantalla al index.html que es donde esta el Login
export function redirectToIndex() {
    document.location.href = "../index.html";
}
  
menuIcon.addEventListener("click", toggleMenu);
logout.addEventListener("click", redirectToIndex);
  
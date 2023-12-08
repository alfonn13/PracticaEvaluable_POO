document.addEventListener("DOMContentLoaded", () => {
    const eyeClose = document.getElementById('eye-close');
    const eyeOpen = document.getElementById('eye-open');
    const password = document.getElementById('password');
    const loginButton = document.getElementById('login-button');
    const user = document.getElementById('user');

    /*AddEvenListener para que cuando clickamos el ojo nos aparezca o nos salga la contraseña con puntos
    y no se vea la contraseña*/
    eyeOpen.addEventListener("click", () => {
      eyeOpen.classList.add('hidden');
      eyeClose.classList.remove('hidden');
      password.type = 'text';
    });
  
    eyeClose.addEventListener("click", () => {
      eyeClose.classList.add('hidden');
      eyeOpen.classList.remove('hidden');
      password.type = 'password';
    });
  
    /*Si la contraseña es correcta cambiaremos y iremos a la pantalla inicio.html
     que es donde esta el inventario*/
    loginButton.addEventListener("click", () => {
      const passwordValue = password.value;
      const userValue = user.value;
      const PIN = "12345"
  
      if (userValue === '' || passwordValue === '') {
        alert('Introduzca los datos');
      } else if (passwordValue === PIN) {
        window.location.href = '/templates/inicio.html'; // Cambiado a 'inicio.html'
      } else {
        alert('Contraseña incorrecta'); 
      }
    });
  });
  
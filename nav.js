const sidebar = document.querySelector('.sidebar');

// Función para alternar la clase 'closed' en la barra lateral
function toggleSidebar() {
  sidebar.classList.toggle('closed');
}

// Agregar un evento de clic al elemento que debería abrir/cerrar la barra lateral
const toggleButton = document.querySelector('.toggle-button');
toggleButton.addEventListener('click', toggleSidebar);
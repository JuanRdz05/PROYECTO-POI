//Funcionalidad para alternar entre pestañas
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los botones de opción
    const botonesOpcion = document.querySelectorAll('.boton-opcion');
    
    // Añadir evento click a cada botón
    botonesOpcion.forEach(boton => {
        boton.addEventListener('click', function() {
            // Obtener el objetivo del botón (info o logros)
            const target = this.getAttribute('data-target');
            
            // Remover clase activo de todos los botones
            botonesOpcion.forEach(btn => btn.classList.remove('activo'));
            
            // Añadir clase activo al botón clickeado
            this.classList.add('activo');
            
            // Ocultar todos los contenedores
            document.querySelectorAll('.infoPerfil-container, .logros-container').forEach(container => {
                container.classList.remove('activo');
            });
            
            // Mostrar el contenedor correspondiente
            document.getElementById(target).classList.add('activo');
        });
    });
    
// Botón de cerrar sesión
const botonCerrarSesion = document.querySelector('.boton-cerrarSesion');
if (botonCerrarSesion) {
    botonCerrarSesion.addEventListener('click', function() {
        Swal.fire({
            title: '¿Cerrar sesión?',
            text: "Estás a punto de cerrar tu sesión",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#D32F2F',
            cancelButtonColor: '#666',
            confirmButtonText: 'Sí, cerrar sesión',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Cerrando sesión...',
                    icon: 'success',
                    text: 'Por favor, espera un momento',
                    timer: 2000, // Corregido: es 'timer', no 'time'
                    timerProgressBar: true,
                    showConfirmButton: false, 
                    willClose: () => {
                        window.location.href = 'login.html';
                    }
                });
            }
        });
    });
}
});

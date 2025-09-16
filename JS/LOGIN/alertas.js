loginForm.addEventListener('submit', function(e) {
e.preventDefault(); // Prevenir el envío real del formulario

const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

if (email && password) {
    // Mostrar mensaje de éxito
    Swal.fire({
        title: '¡Éxito!',
        text: 'Inicio de sesión exitoso',
        icon: 'success',
        confirmButtonText: 'Continuar',
        timer: 3000, 
        timerProgressBar: true
    }).then((result) => {
        // Redireccionar después de que el usuario haga clic o pase el tiempo
        window.location.href = "../../index.html";
    });
} else {
    Swal.fire
    ({
        theme: 'bulma',
        icon: 'error',
        title:'Error',
        text: 'Por favor, rellena todos los campos',
        confirmButtonText: 'Aceptar',
    })
}
});
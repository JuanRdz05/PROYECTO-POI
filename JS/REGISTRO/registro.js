registerForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevenir el envío real del formulario
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const foto = document.getElementById('foto').files[0];
    const nombre = document.getElementById('nombre').value;
    const apellidoPaterno = document.getElementById('apellidoPaterno').value;
    const apellidoMaterno = document.getElementById('apellidoMaterno').value;
    const usuario = document.getElementById('usuario').value;
    const genero = document.getElementById('genero').value;
    const cumpleaños = document.getElementById('cumpleaños').value;
    const pais = document.getElementById('paises').value;

    
    if (email && password && foto && nombre && apellidoPaterno && apellidoMaterno && usuario && genero && cumpleaños && pais) {

    
        // Mostrar mensaje de éxito
        Swal.fire({
            title: '¡Éxito!',
            text: 'Registro exitoso',
            icon: 'success',
            confirmButtonText: 'Continuar',
            timer: 3000, 
            timerProgressBar: false,
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
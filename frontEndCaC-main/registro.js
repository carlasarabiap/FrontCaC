document.getElementById('formularioRegistro').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var fenaci = document.getElementById('fenaci').value;
    var pais = document.getElementById('pais').value;
    var email = document.getElementById('email').value;
    var usuario = document.getElementById('usuario').value;
    var contraseña = document.getElementById('contraseña').value;


    enviarDatos(nombre, apellido, fenaci, pais, email, usuario, contraseña);

    function enviarDatos(nombre, apellido, fenaci, pais, email, usuario, contraseña) {
        var url = 'http://localhost:8080/trenAlSur/user'; // URL de tu API
        var datos = { nombre: nombre, apellido: apellido, fenaci: fenaci, pais: pais, email: email, usuario: usuario, contraseña: contraseña };
    
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        })
        .then(function(response) {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then(function(data) {
            console.log('Datos enviados exitosamente:', data);
            alert("El usuario se registro exitosamente")
            window.location.href = 'login.html'; // Redirecciona a login.html
        })
        .catch(function(error) {
            console.error('Error:', error);
        });
    }
});
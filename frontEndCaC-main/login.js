document.getElementById('formularioLogin').addEventListener('submit', function (event) {
  event.preventDefault();

  const usuario = document.getElementById('usuario').value;
  const contraseña = document.getElementById('contraseña').value;

  console.log('Envío de formulario iniciado...'); // Imprime un mensaje cuando se inicia el envío

  fetch('http://localhost:8080/trenAlSur/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ usuario, contraseña })
  })
    .then(response => response.json()) // Asumiendo que el servidor responde con JSON
    .then(data => {
      window.location.href = "usuarioIndex.html"; // Redirecciona al usuario a su página

    })
    .catch(error => console.error('Error:', error));
});
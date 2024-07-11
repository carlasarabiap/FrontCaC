// <--LOGIN VALIDATION-->

const usuario = document.querySelector("#usuario")

const contraseña = document.querySelector("#contraseña")

const btnLogin = document.querySelector("#btnSubmit")

btnLogin.addEventListener("click", function (event) {
    if (usuario.value == "" || contraseña.value == "") {
        alert("Agregar usuario y contraseña")
    }
});

// <--END LOGIN VALIDATION-->


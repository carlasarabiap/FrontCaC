

document.addEventListener("DOMContentLoaded", () => {
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const fenaci = document.getElementById("fenaci");
    const pais = document.getElementById("pais");
    const email = document.getElementById("email");
    const usuario = document.getElementById("usuario");
    const contraseña = document.getElementById("contraseña");

    const fields = [
        { field: nombre, name: "Nombre" },
        { field: apellido, name: "Apellido" },
        { field: fenaci, name: "Fecha de nacimiento" },
        { field: pais, name: "pais" },
        { field: email, name: "email" },
        { field: usuario, name: "usuario" },
        { field: contraseña, name: "contraseña" },

    ];

    btnRegistro.addEventListener("click", function (event) {
        let allFieldsFilled = true;
        let errorMessage = "";

        fields.forEach(({ field, name }) => {
            if (field.value.trim() === "") {
                allFieldsFilled = false;
                errorMessage += `${name} no puede estar vacío.\n`;
            }
        });

        if (!allFieldsFilled) {
            event.preventDefault();
            alert(errorMessage);
        }
    });
});

// <--END REGISTRATION VALIDATION-->

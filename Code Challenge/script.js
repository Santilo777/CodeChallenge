document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("registroForm");
    const enviarBtn = document.getElementById("enviarBtn");
    const respuesta = document.getElementById("respuesta");

    enviarBtn.addEventListener("click", function () {
        // Obtener los valores del formulario
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const fechaNacimiento = document.getElementById("fechaNacimiento").value;

        // Crear un objeto con los datos del formulario
        const datos = {
            nombre: nombre,
            apellido: apellido,
            fechaNacimiento: fechaNacimiento
        };

        // Realizar la solicitud POST utilizando fetch
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        })
        .then(response => response.json())
        .then(data => {
            respuesta.innerHTML = "Respuesta del servidor: " + JSON.stringify(data);
        })
        .catch(error => {
            respuesta.innerHTML = "Error al enviar la solicitud: " + error;
        });
    });
});
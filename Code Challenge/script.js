document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const data = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        fechaNacimiento: document.getElementById("fechaNacimiento").value
    };

    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
});
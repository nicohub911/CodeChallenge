const form = document.getElementById("formulario");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fechaNacimiento = document.getElementById("fecha").value;
    let valores = {nombre,apellido,fechaNacimiento};

    fetch('https://jsonplaceholder.typicode.com/users', {method: 'POST', headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(valores)
    })
    .then(response => response.json())
    .then(data => {
        console.log(JSON.stringify(data, null, 2));
    })
    .catch(error => {
        console.log(error);
    });
});

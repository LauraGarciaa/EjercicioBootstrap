// Aqui obtenemos el valor guardado en localStorage de la clave "usuarios"
const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios'))

// Aqui cogemos el div con id "usuarios"
const usuariosDiv = document.getElementById('usuarios')

// Recorremos uno a uno los usuarios guardados en el array "usuariosGuardados"
for (let i = 0; i < usuariosGuardados.length; i++) {
    //Aqui creamos un div nuevo y lo guardamos en "nuevoDiv"
    const nuevoDiv = document.createElement('div')

    // Al nuevo div creado, le añadimos la clase "card"
    nuevoDiv.classList.add('card')
   
    // En el innerHTML del nuevo div creado, le metemos en el innerHTML el codigo
    // restante para que se vea un card de bootstrap
    nuevoDiv.innerHTML = `
    <div class="card-header">
        Usuario ${i + 1}
    </div>
    <div class="card-body">
        <h5 class="card-title">${usuariosGuardados[i].nombre}</h5>
        <p class="card-text">${usuariosGuardados[i].email}</p>
        <a href="#" class="btn btn-primary">Eliminar</a>
    </div>
    `
    // Aqui indicamos que al div con id "usuarios", se le añada el nuevo div que acabamos de crear
    usuariosDiv.append(nuevoDiv);
}
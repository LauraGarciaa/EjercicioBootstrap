// Pillamos el formulario que tiene la clase "needs-validation"
const form = document.querySelector('.needs-validation')

let usuariosGuardados = [];

form.addEventListener('submit', event => {
    // Esto evita que se reinicie la pagina
    event.preventDefault()

    // Aqui se añade una clase al formulario. La clase que se añade es "was-validated".
    form.classList.add('was-validated')

    // Aqui cogemos los valores de los inputs
    const nombre = document.getElementById('fname').value
    const email = document.getElementById('exampleInputEmail1').value
    const contraseña1 = document.getElementById('exampleInputPassword1').value
    const contraseña2 = document.getElementById('exampleInputPassword2').value

    // comprobamos que nombre esta vacio, si esta vacio, muestra una alerta
    // aparte de esa validacion, hace todas las que se muestra en los if()
    if (nombre == '') {
        mostrarAlerta('Por favor, rellene el nombre', 'info')
    } else if (email == '') {
        mostrarAlerta('Por favor, rellene el email', 'info')

        // En este if aplicamos una validacion al email. Esta validacion la he sacado de los apuntes "Validaciones"
    } else if (/(\w+?@\w+?\x2E.+)/.test(email) !== true) {
        mostrarAlerta('Por favor, introduce un email valido', 'info')
    } else if (contraseña1 == '') {
        mostrarAlerta('Por favor, rellene el contraseña 1', 'info')

        // Aqui añadimos otra validacion como hemos hecho para el email pero en este caso para la contraseña
    } else if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/.test(contraseña1) !== true) {
        mostrarAlerta('La contraseña tiene que cumplir los siguientes requisitos: Minimo 8 caracteres, Maximo 15, Al menos una letra mayúscula, Al menos una letra minuscula, Al menos un dígito, No espacios en blanco, Al menos 1 caracter especial', 'info')
    } else if (contraseña2 == '') {
        mostrarAlerta('Por favor, rellene el contraseña 2', 'info')

        // En este if, si la contraseña1 no es igual a la contraseña2, quiere decir que no son iguales
        // por lo cual se muestra una alerta
    } else if (contraseña1 != contraseña2) {
        mostrarAlerta('Las contraseñas no coinciden', 'info')
    } else {
        // Creamos una variable "nuevoUsuario" el cual le añadimos el valor de un objeto
        const nuevoUsuario = {
            nombre: nombre,
            email: email
        }
        // Aqui comprobamos si hay algo guardado en localStorage
        if (JSON.parse(localStorage.getItem('usuarios'))) {
            usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) // [{nombre: 'laura', email: 'test@test.com'}]
        }
        // Aqui, metemos en el array, el nuevo usuario
        usuariosGuardados.push(nuevoUsuario)
        
        // Aqui, guardamos en el localstorage el array "usuariosGuardados" con la clave "usuarios"
        localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));

        // Mostramos otra alerta indicando que se ha creado correctamente
        mostrarAlerta('Usuario creado correctamente', 'success')

        // Borramos la clase "was-validated", asi no se muestran los inputs con bordes rojos
        form.classList.remove('was-validated')

        // Reseteamos el formulario para que se borren los datos introducidos en los inputs
        form.reset()
    }
 
}, false)

// Aqui cogemos el div que tiene el id "alertas"
const alertPlaceholder = document.getElementById('alertas')

// mostrarAlerta es una funcion que recibe dos argumentos, el mensaje de la alerta y el tipo de alerta
const mostrarAlerta = (message, type) => {
    // Aqui creamos un nuevo elemento div
    const nuevoDiv = document.createElement('div')
    nuevoDiv.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '</div>'
    ].join('')
  
    // Añade el nuevo div creado al div de alertas
    alertPlaceholder.append(nuevoDiv)

    // Aqui, despues de 3 segundos, eliminamos el nuevo div.
    setTimeout(() => {
        alertPlaceholder.removeChild(nuevoDiv);
    }, 3000);
    // 3000 milisegundos -> 3 segundos. 1000 milisegundos -> 1 segundo
}

// video de youtube para entender bootstrap
// https://www.youtube.com/watch?v=XXllX0A_9KQ&pp=ygUSdHV0b3JpYWwgYm9vdHN0cmFw


function validarFormulario() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var mensaje = document.getElementById("message").value;
  
  // Validar si el nombre está vacío
  if (name === "") {
      alert("Por favor, ingresa tu nombre.");
      return false;  // Evita el envío del formulario sin el nombre y emite alerta
  }
  
  // Validar si el email está vacío
  if (email === "") {
      alert("Por favor, ingresa tu email.");
      return false;  // No permite que se envíe el formulario y emite una alerta pidiendo que se complete el campo mail
  }
  
  // Validar formato del email
  var verificacionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!verificacionEmail.test(email)) {
      alert("Por favor, ingresa un email válido.");
      return false;  // envía alerta si el mail no es válido
  }


  if (mensaje === "") {
    alert ("Por favor, escriba el mensaje que desea enviarme");
    return false; // Evita el enenvío del formulario por estar vacío el campo "mensaje", emite alerta
  }

  if (mensaje.length > 50) {
    alert("El mensaje no puede tener más de 50 caracteres.");
    return false;  // Si el mensaje tiene mas de 50 caracteres, saldrá la alerta
}

  return true;  // Hechas todas las validaciones, permite que se envíe el formulario
}

//Me quedó pendiente el deshabilitar el botón "enviar mensaje" pero no supe cómo hacerlo, sin embargo, voy a seguir trabajando en mi código
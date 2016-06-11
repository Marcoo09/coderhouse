// JavaScript Document
function confirmar() {
    var name = document.getElementById("nombre").value;
    var edad = +document.getElementById("edad").value;
    var email = document.getElementById("email").value;
    var fecha = document.getElementById("fecha").value;
    var pago = document.getElementById("pago").value;
    var fecha = document.getElementById("fecha").value;
    var pelicula = document.getElementById("peliculaAlquilada").value;
    var peliculaElegida = document.getElementById("peliculaAlquilada").selectedIndex;
    var precio = document.getElementById("precio").value;
    var tiempo = document.getElementById("tiempo").value;
    var mensaje = document.getElementById("msj").value;
    /* var precio=peliculaElegida.value;*/
    if (name.length == 0) {
        alert("Campo del nombre obligatorio");
        document.getElementById("nombre").focus();
        return 0;
    } else if (edad == "") {
        alert("Campo de la edad obligatorio");
        document.getElementById("edad").focus();
        return 0;
    } else if (edad == 0) {
        alert("Debes ingresar una edad");
        document.getElementById("edad").focus();
        return 0;
    } else if (edad < 18) {
        alert("Debes ser mayor de edad para rentar una pelicula");
        document.getElementById("edad").focus();
        return 0;
    } else if (email.length == 0) {
        alert("Debes ingresar tu e-mail");
        document.getElementById("email").focus();
    } else if (pago == "") {
        alert("Debes seleccionar una forma de pago");
        document.getElementById("pago").focus();
    } else if (pelicula == "") {
        alert("Debes elegir la pelicula que quieres");
        document.getElementById("peliculaAlquilada").focus();
    } else if (precio.length == 0) {
        alert("No modifiques los precios por favor, gracias.");
        document.getElementById("precio").focus();
    }
    /*else if(peliculaElegida==1){
				document.getElementById("precio").value=150;
				
		}*/
    else if (tiempo.length == 0) {
        alert("Necesitamos saber cuanto tiempo la quieres rentar.");
        document.getElementById("tiempo").focus();
    } else if (fecha.length == 0) {
        alert("Poner fecha de llenado de formulario");
        document.getElementById("fecha").focus();
    } else if (mensaje.length == 0) {
        alert("Quisieramos que nos dejes algún comentario...");
        document.getElementById("msj").focus();
    } else {
        alert(
            "Tu soliciud de alquiler a sido enviada, te llegara un correo con la fecha de llegada de tu alquiler."
        );
    }
}
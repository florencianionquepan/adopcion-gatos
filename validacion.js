//sirve para nombre, apellido, y ciudad:
function validarNombre(nombre){
    let mensaje='';
    if(nombre.length===0){
        mensaje='Este campo debe contener al menor un caracter';
    }else if(nombre.length>30){
        mensaje='Este campo debe contener menos de 30 caracteres';
    }else if(!/^[a-z\u00C0-\u017F ]+$/i.test(nombre)){
        mensaje='El campo solo acepta letras';
    }
    return mensaje;
}

function validarDNI(dni){
    let mensaje='';
    if(dni.length===0){
        mensaje='Este campo debe contener al menor un caracter';
    }else if(dni.length>8){
        mensaje='Este campo debe contener menos de 8 caracteres';
    }else if(!/^[0-9]+$/.test(dni)){
        mensaje='El campo solo acepta numeros';
    }
    return mensaje;
}

function calcularEdad(date){
    const fechaHoy=new Date();
    const anioHoy=parseInt(fechaHoy.getFullYear());
    const mesHoy=parseInt(fechaHoy.getMonth()+1);
    const diaHoy=parseInt(fechaHoy.getDate());

    //1991-09-01
    const anioNac=parseInt(String(date).substring(0,4));
    const mesNac=parseInt(String(date).substring(5,7));
    const diaNac=parseInt(String(date).substring(8,10));

    let edad=anioHoy-anioNac;
    if(mesHoy<mesNac){
        edad--;
    }else if(mesHoy===mesNac){
        if(diaHoy<diaNac){
            edad--;
        }
    }
    return edad;
}

function validarFormatoFecha(fecha) {
    if (/^\d{2,4}\-\d{1,2}\-\d{1,2}$/.test(fecha) && (fecha!='')) {
          return true;
    } else {
          return false;
    }
}

function validadFecha(fecha){
    let mensaje='';
    if (!validarFormatoFecha(fecha)){
        mensaje="Debe introducir una fecha valida";
    }else if(calcularEdad(fecha)<18){
        mensaje="Debe ser mayor de edad para completar el formulario";
    }
    return mensaje;
}


function validarDireccion(dire){
    let mensaje='';
    if(dire.length===0){
        mensaje='Este campo debe contener al menor un caracter';
    }else if(dire.length>50){
        mensaje='Este campo debe contener menos de 50 caracteres';
    }else if(!/^[a-z\u00C0-\u017F 0-9]+$/i.test(dire)){
        mensaje='El campo solo acepta letras y numeros';
    }
    return mensaje;
}

function validarTelefono(tel){
    let mensaje='';
    if(tel.length===0){
        mensaje='Este campo debe contener al menos un caracter';
    }else if(tel.length>15){
        mensaje='Este campo debe contener menos de 15 caracteres';
    }else if(!/^[+][0-9]+$/i.test(tel)){
        mensaje='Este campo puede contener solo + y números';
    }
    return mensaje;
}

function validarMail(mail){
    let mensaje='';
    if(mail.length===0){
        mensaje='Este campo debe contener al menor un caracter';
    }else if(mail.length>50){
        mensaje='Este campo debe contener menos de 50 caracteres';
    }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*\.([a-z]{3})(\.[a-z]{2})*$/.test(mail)){
        mensaje='Debe completar un mail valido';
    }
    return mensaje;
}


function validarCod(cod){
    let mensaje='';
    if(!/^[0-9]{4}$/.test(cod)){
        mensaje="El codigo postal debe contener 4 números";
    }
    return mensaje;
}

function validarDescripcion(descripcion){
    let mensaje='';
    if (descripcion.length >=200){
        mensaje="El campo descripcion es muy largo";
    }else if (descripcion.length == 0){
        mensaje='El campo descripcion no puede estar vacìo';
    }else if (!/^[a-z,\. ]+$/i.test(descripcion)){
        mensaje='El campo descripcion solo puede tener letras, puntos y comas';
    }
    return mensaje;
}


//validar formularios
function validarFormulario($form){

    const nombre=$form.nombre.value;
    const apellido=$form.apellido.value;
    const dni=$form.dni.value;
    const fecha=$form.fecha.value;
    const direccion=$form.direccion.value;
    const ciudad=$form.ciudad.value;
    const codigo=$form.codigo.value;
    const telefono=$form.telefono.value;
    const mail=$form.mail.value;

    const errorNombre=validarNombre(nombre);
    const errorApellido=validarNombre(apellido);
    const errorDni=validarDNI(dni);
    const errorFechaNac=validadFecha(fecha);
    const errorDireccion=validarDireccion(direccion);
    const errorCiudad=validarNombre(ciudad);
    const errorCodigo=validarCod(codigo);
    const errorTelefono=validarTelefono(telefono);
    const errorMail=validarMail(mail);

    const errores={
        nombre:errorNombre,
        apellido:errorApellido,
        dni:errorDni,
        fecha:errorFechaNac,
        direccion:errorDireccion,
        ciudad:errorCiudad,
        codigo:errorCodigo,
        telefono:errorTelefono,
        mail:errorMail
    }

    return errores;

}

// Validar Formulario de Adopcion:

function validarAdopcion(){
    const $formAdopcion=document.querySelector('#formAdopcion form');
    const erroresAdopcion=validarFormulario($formAdopcion);

    let cantErrores=manejarErrores(erroresAdopcion,$formAdopcion);
    if(cantErrores===0){
        document.querySelector('#formAdopcion').className='oculto';
        setInterval(document.querySelector('#exito').className='text-center',3000);
        setTimeout(function(){
            document.querySelector('#detalles').className='oculto';
            document.querySelector('#destacados').className='text-center m-5';
            document.querySelector('#contenido').className='text-center border rounded fondo m-5';
            window.location.href = '#arriba';
            document.querySelector('#exito').className='oculto';
        },3000)
    }
    
}

function manejarErrores(errores,$form){
    const keys=Object.keys(errores);
    //const $errores=document.querySelector('#errores');
    let cantidadErrores=0;
    //borrarErroresAnteriores();

    keys.forEach(function(key){
        const error=errores[key];
        if(error){
            cantidadErrores++;
            $form[key].classList.add('error');
        }else{
            $form[key].classList.remove('error');
        }
    })
    return cantidadErrores;

}

/* function borrarErroresAnteriores(){
    const $erroresAnteriores=document.querySelectorAll('.existeError');
    for(let i=0;i<$erroresAnteriores.length;i++){
        $erroresAnteriores[i].remove();
    }
} */



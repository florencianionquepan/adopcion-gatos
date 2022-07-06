//sirve para nombre, apellido, y ciudad:
function validarNombre(nombre){
    let mensaje='';
    if(nombre.length===0){
        mensaje='El campo nombre, apellido y ciudad no pueden estar vacíos';
    }else if(nombre.length>30){
        mensaje='El campo nombre, apellido y ciudad deben contener menos de 30 caracteres';
    }else if(!/^[a-z\u00C0-\u017F ]+$/i.test(nombre)){
        mensaje='El campo nombre, apellido y ciudad solo acepta letras y espacios';
    }
    return mensaje;
}

function validarDNI(dni){
    let mensaje='';
    if(dni.length<8){
        mensaje='El campo dni debe contener al menos 8 caracteres';
    }else if(dni.length>8){
        mensaje='El campo dni debe contener menos de 8 caracteres';
    }else if(!/^[0-9]+$/.test(dni)){
        mensaje='El campo dni solo acepta numeros';
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

function esBisiesto(fecha){
    const anio=parseInt(String(fecha).substring(0,4));
    return (((anio % 4 == 0) && (anio % 100 != 0)) || (anio % 400 == 0));
}

//aca valido fechas en año bisiesto, que no sea 31 de junio, etc--
function validarFecha(fecha){
    let res=true;
    let dmax;
    const mes=parseInt(String(fecha).substring(5,7));
    const dia=parseInt(String(fecha).substring(8,10));

    switch(mes){
        case 1:dmax=31;break;
        case 2: if(esBisiesto(fecha)){dmax=29;}else{dmax=28;};break;
        case 3: dmax=31;break;
        case 4: dmax=30;break;
        case 5: dmax=31;break;
        case 6: dmax=30;break;
        case 7: dmax=31;break;
        case 8: dmax=31;break;
        case 9: dmax=30;break;
        case 10:dmax=31;break;
        case 11:dmax=30;break; 
        case 12:dmax=31;break;
    }
    if(dia>dmax){
        res=false;
    }
    return res;
}

//validar fechas
function validarFormatoFecha(fecha) {
    let resultado;
    if (/^\d{2,4}\-\d{1,2}\-\d{1,2}$/.test(fecha) && (fecha!='') && validarFecha(fecha)){
        resultado=true;
    }else {
        resultado=false;
    }
    return resultado;
}

function validadFecha(fecha){
    let mensaje='';
    if (!validarFormatoFecha(fecha) || calcularEdad(fecha)>100){
        mensaje="Debe introducir una fecha valida";
    }else if(calcularEdad(fecha)<18){
        mensaje="Debe ser mayor de edad para completar el formulario";
    }
    return mensaje;
}


function validarDireccion(dire){
    let mensaje='';
    if(dire.length===0){
        mensaje='El campo dirección no puede estar vacío';
    }else if(dire.length>50){
        mensaje='El campo dirección debe contener menos de 50 caracteres';
    }else if(!/^[a-z\u00C0-\u017F 0-9]+$/i.test(dire)){
        mensaje='El campo dirección solo acepta letras y numeros';
    }
    return mensaje;
}

function validarTelefono(tel){
    let mensaje='';
    if(tel.length===0){
        mensaje='El campo teléfono no puede estar vacío';
    }else if(tel.length>15 || tel.length<12){
        mensaje='El campo teléfono debe contener entre 12 y 15 caracteres';
    }else if(!/^[+][0-9]+$/i.test(tel)){
        mensaje='El campo teléfono debe contener solo el prefijo+ y números';
    }
    return mensaje;
}

function validarMail(mail){
    let mensaje='';
    if(mail.length===0){
        mensaje='El campo e-mail no puede estar vacío';
    }else if(mail.length>50){
        mensaje='El campo e-mail debe contener menos de 50 caracteres';
    }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*\.([a-z]{3})(\.[a-z]{2})*$/.test(mail)){
        mensaje='Debe completar un e-mail valido';
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
        mensaje='El campo descripcion no puede estar vacío';
    }else if (!/^[a-z,\. ]+$/i.test(descripcion)){
        mensaje='El campo descripcion solo puede tener letras, puntos y comas';
    }
    return mensaje;
}

function validarDinero(cantidad){
    let mensaje='';
    if(cantidad.length===0){
        mensaje="El campo cantidad a donar no puede estar vacío";
    }else if(cantidad.length>11){
        mensaje="El campo cantidad a donar puede contener hasta 11 caracteres";
    }else if(!/^[0-9]+$/.test(cantidad)){
        mensaje="El campo cantidad a donar solo acepta números";
    }
    return mensaje;
}

//Falta validación en base al algoritmo de Luhn.
function validarTarjeta(nroTarjeta){
    let mensaje='Numero de tarjeta no válido';
    //visa
    if(/^(4[0-9]{3}\s(([0-9]{4}\s){2}[0-9]{4}))/.test(nroTarjeta)){
        mensaje="";
    }else if(/^4[0-9]{3} ?[0-9]{4} ?[0-9]{4} ?[0-9]{4}$/.test(nroTarjeta)){
        mensaje="";
        //master
    }else if(/^5[1-5][0-9]{2} ?[0-9]{4} ?[0-9]{4} ?[0-9]{4}$/.test(nroTarjeta)){
        mensaje="";
        //amex
    }else if(/^3[47][0-9-]{16}$/.test(nroTarjeta)){
        mensaje="";
    }
    return mensaje;
}

function validarSeguridad(nroSeg){
    let mensaje='';
    if(!/^[0-9]{3}$/.test(nroSeg)){
        mensaje="Codigo de seguridad no válido";
    }
    return mensaje;
}

function validarFechaExp(fechaExp){
    let mensaje='';
    const mes=parseInt(String(fechaExp).substring(0,2));
    const anio=parseInt(String(fechaExp).substring(3,5));
    const anioActual=parseInt(String(new Date().getFullYear()).substring(2,4));
    const mesActual=parseInt(String(new Date().getMonth()))+1;

    if(!/^\d{2}\/\d{2}$/.test(fechaExp)){
        mensaje="El campo fecha de vencimiento contiene carácteres no válidos";
    }else if(anio>anioActual+7 || anio<anioActual || mes>12 || mes<1){
        mensaje="Fecha de expiración no válida";
    }else if(anio==anioActual && mes<mesActual){
        mensaje="Fecha de expiración no válida";
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



function manejarErrores(errores,$form,$ulErrores){
    const keys=Object.keys(errores);
    
    let cantidadErrores=0;
    borrarErroresAnterioresFPD();

    keys.forEach(function(key){
        const error=errores[key];
        if(error){
            cantidadErrores++;
            $form[key].classList.add('error');
            const $error=document.createElement('li');
            $error.innerText=error;
            $error.className='existeError';
            $ulErrores.appendChild($error);
        }else{
            $form[key].classList.remove('error');
        }
    })
    return cantidadErrores;

}

function borrarErroresAnterioresFPD(){
    const $erroresAnteriores=document.querySelectorAll('.existeError');
    for(let i=0;i<$erroresAnteriores.length;i++){
        $erroresAnteriores[i].remove();
    }
}



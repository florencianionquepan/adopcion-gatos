//sirve para nombre, apellido, y ciudad:
function validarNombre(nombre){
    let mensaje='';
    if(nombre.length===0){
        mensaje='Este campo debe contener al menor un caracter';
    }else if(nombre.length>30){
        mensaje='Este campo debe contener menos de 30 caracteres';
    }if(!/^(a-z)+$/i.test(nombre)){
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
    }if(!/^(0-9)+$/i.test(dni)){
        mensaje='El campo solo acepta letras';
    }
}

function calcularEdad(date){
    const fechaHoy=new Date();
    const anioHoy=parseInt(fechaHoy.getFullYear());
    const mesHoy=parseInt(fechaHoy.getMonth()+1);
    const diaHoy=parseInt(fechaHoy.getDate());

    //1991/09/01
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
    const RegExPattern = /^\d{2,4}\/\d{1,2}\/\d{1,2}$/;
    if (RegExPattern.test(fecha) && (fecha!='')) {
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
    }if(!/^[a-z 0-9]+$/i.test(dire)){
        mensaje='El campo solo acepta letras y numeros';
    }
    return mensaje;
}

function validarTelefono(tel){
    let mensaje='';
    if(tel.length===0){
        mensaje='Este campo debe contener al menor un caracter';
    }else if(tel.length>15){
        mensaje='Este campo debe contener menos de 15 caracteres';
    }if(!/^[+][0-9]+$/i.test(tel)){
        mensaje='Este campo puede contener solo + y números';
    }
}
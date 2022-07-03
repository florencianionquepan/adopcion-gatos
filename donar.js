const $formDonar=document.querySelector('#form-donar form');

function validarDonacion(){
    const erroresDonacion=validarFormulario($formDonar);

    const cantidad=$formDonar.cantidad.value;
    const nroTarjeta=$formDonar.nroTarjeta.value;
    const nroSeg=$formDonar.nroSeg.value;
    const fechaExp=$formDonar.fechaExp.value;
    const dniTarjeta=$formDonar.dniTarjeta.value;
    
    const errorCantidad=validarDinero(cantidad);
    const errorNroTarjeta=validarTarjeta(nroTarjeta);
    const errorNroSeg=validarSeguridad(nroSeg);
    const errorFechaExp=validarFechaExp(fechaExp);
    const errorDniTarjeta=validarDNI(dniTarjeta);

    erroresDonacion.cantidad=errorCantidad;
    erroresDonacion.nroTarjeta=errorNroTarjeta;
    erroresDonacion.nroSeg=errorNroSeg;
    erroresDonacion.fechaExp=errorFechaExp;
    erroresDonacion.dniTarjeta=errorDniTarjeta;

    let cantidadErrores=manejarErrores(erroresDonacion,$formDonar);
    if(cantidadErrores===0){
        document.querySelector('#exitoDonacion').className='text-center';
        setTimeout(function(){
            window.location.href = 'index.html';
        },1000)
    }
}

document.querySelector('#form-donar button').onclick=function(){
    validarDonacion();
}

/**
 * CONOCER TIPO DE TARJETA EN EL PRIMER KEYPRESS
 */
const $inputTarjeta=document.querySelector('#t-numero');
const $tipoTarjeta=document.querySelector('#tipo-t');

$inputTarjeta.onkeydown=function(event){
    const valor=$inputTarjeta.value;
    if (valor.length==0){
        if (event.key==4){
            $tipoTarjeta.value='visa';
            mostrarTarjeta('visa');
        }else if(event.key==5){
            $tipoTarjeta.value='master';
            mostrarTarjeta('master');
        }else if(event.key==3){
            $tipoTarjeta.value='amex';
            mostrarTarjeta('amex');
        }
    }
}

function  mostrarTarjeta(tipo){
    document.querySelectorAll('#dibujo img').forEach(d=>{
        d.classList.add('oculto');
    })
    document.querySelector(`#${tipo}`).classList.remove('oculto');
    document.querySelector(`#${tipo}`).classList.add('pt-4');
}
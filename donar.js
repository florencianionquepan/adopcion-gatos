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
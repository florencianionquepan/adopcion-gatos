const $botonAsociacion=document.querySelector('#asociacion');
const $botonFP=document.querySelector('#btn-fp');
const $botonDonar=document.querySelector('#btn-donar');
const $botonAcceder=document.querySelector('#btn-acceder');

function irInicio(){
    ocultarAsociacion();
    ocultarFP();
    ocultarDonar();
    ocultarAcceder();
    principalVer();
    document.querySelector('#detalles').className='oculto';
    //Además de ocultar cualquier div que pueda estar mostrado, limpia formularios:
    limpiarFormFP();
    limpiarFormD();
    limpiarFormAcceder();
    limpiarFormAdoptar();
    window.scrollTo(0,0);
}

function ocultarPrincipal(){
    document.querySelector('#destacados').className='oculto';
    document.querySelector('#contenido').className='oculto';
}

function principalVer(){
    document.querySelector('#destacados').className='text-center m-5';
    document.querySelector('#contenido').className='text-center border rounded fondo m-5';
}

function ocultarDetalles(){
    document.querySelector('#detalles').className='oculto';
    document.querySelector('#formAdopcion').className='oculto';
}

/**
 * ASOCIACION
 */

$botonAsociacion.onclick=function(){
    ocultarPrincipal();
    ocultarDetalles();
    ocultarFP();
    ocultarDonar();
    ocultarAcceder();
    document.querySelector('#acerca-de').classList.remove('oculto');
    limpiarFormFP();
    limpiarFormD();
    limpiarFormAcceder();
    limpiarFormAdoptar();
}

function ocultarAsociacion(){
    document.querySelector('#acerca-de').classList.add('oculto');
}

/**
 * FORMAR-PARTE
 */
$botonFP.onclick=function(){
    irFormarParte();
}

function irFormarParte(){
    ocultarPrincipal();
    ocultarDetalles();
    ocultarAsociacion();
    ocultarDonar();
    ocultarAcceder();
    document.querySelector('#FP').classList.remove('oculto');
    limpiarFormFP();
    limpiarFormD();
    limpiarFormAcceder();
    limpiarFormAdoptar();
}

function ocultarFP(){
    document.querySelector('#FP').classList.add('oculto');
    document.querySelector('#formar-parte').classList.add('oculto');
}

/**
 * DONAR
 */

$botonDonar.onclick=function(){
    ocultarPrincipal();
    ocultarDetalles();
    ocultarAsociacion();
    ocultarFP();
    ocultarAcceder();
    document.querySelector('#donar').classList.remove('oculto');
    limpiarFormFP();
    limpiarFormD();
    limpiarFormAcceder();
    limpiarFormAdoptar();
}

function ocultarDonar(){
    document.querySelector('#donar').classList.add('oculto');
    document.querySelector('#formAdopcion').classList.add('oculto');
}

/**
 * ACCEDER
 */

$botonAcceder.onclick=function(){
    ocultarPrincipal();
    ocultarDetalles();
    ocultarAsociacion();
    ocultarFP();
    ocultarDonar();
    document.querySelector('#div-acceder').classList.remove('oculto');
    limpiarFormFP();
    limpiarFormD();
    limpiarFormAcceder();
    limpiarFormAdoptar();
}

function ocultarAcceder(){
    document.querySelector('#div-acceder').classList.add('oculto');
}


/**
 * VOLVER-INICIO
 */

document.querySelector('#volver-inicio').onclick=function(){
    irInicio();
}
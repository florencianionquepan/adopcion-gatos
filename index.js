const $acceder=document.querySelector('#acceder');

$acceder.onclick=function(){
    document.querySelector('#destacados').className='oculto';
    document.querySelector('#contenido').className='oculto';
    document.querySelector('#div-acceder').className='container-md w-50 justify-content-center';
}
//agrega mostrar contraseña
document.querySelector('#mostrarCont').onchange=function(){
    const $password=document.querySelector('#password');
    if (this.checked){
        $password.type='text';
    }else{
        $password.type='password';
    }
}

//La funcion de validar usuario valida primero que el usuario ingrese bien los datos, pero
//en este caso una vez este bien escrito no lo encontrará ya que no existen
function validarUsuario(user){
    let mensaje='';
    if(user.length===0){
        mensaje="Introduzca su usuario de gatshan";
    }else if(!/^[a-z0-9\._-]{4,16}(@gatshan.com.ar)$/.test(user)){
        mensaje="Introduzca un usuario válido";
    }else{
        mensaje="Usuario no encontrado";
    }
    return mensaje;
}

function validarContrasenia(password){
    let mensaje='';
    if(password.length<=8){
        mensaje="Introduzca una contraseña válida";
    }
    return mensaje;
}

function validarInicioSesion(){
    const user=document.querySelector('#user').value;
    const password=document.querySelector('#password').value;

    const errorUser=validarUsuario(user);
    const errorPassword=validarContrasenia(password);

    const errores={
        user:errorUser,
        password:errorPassword
    }

    const inputs=Object.keys(errores);
    const $errores=document.querySelector('#errores-acceder');
    let cantErrores;
    borrarErroresAnteriores();

    inputs.forEach(function(input){
        const error=errores[input];
        if(error){
            cantErrores++;
            document.querySelector(`#${input}`).classList.add('error');
            const $li=document.createElement('li');
            $li.innerText=error;
            $li.className='elError';
            $errores.appendChild($li);
        }else{
            document.querySelector(`#${input}`).classList.remove('error');
        }
    })

}

function borrarErroresAnteriores(){
    const $erroresAnteriores=document.querySelectorAll('.elError');
    for(let i=0;i<$erroresAnteriores.length;i++){
        $erroresAnteriores[i].remove();
    }
}

document.querySelector('#div-acceder button').onclick=function(){
    validarInicioSesion();
}

function limpiarFormAcceder(){
    document.querySelectorAll('#form-acceder input').forEach((input)=>{
        input.value="";
        input.classList.remove('error');
    })
    borrarErroresAnteriores();
}
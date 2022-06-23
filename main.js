const URL="https://my-json-server.typicode.com/florencianionquepan/adopcion-gatos/db";

//MOSTRAR PAGINA PRINCIPAL
function crearContenido(){
    return fetch(URL)
    .then(data=>data.json())
    .then(data=>{
        mostrarGatos(data.gato);
        mostrarDest(data.destacado);
    })
    .catch(error=>console.log(error))
}

function mostrarGatos(arrgatos){
    const $contenido=document.querySelector("#contenido");
    const $fila=document.createElement('div');
    $fila.className="row";
    Object.values(arrgatos).forEach((dato)=>{
        const $div=document.createElement('div');
        $div.className="col-lg-4 my-3";
        const $img=document.createElement('img');
        $img.className="rounded";
        $img.src=dato.srcFoto[0];
        const $tit=document.createElement('h2');
        $tit.className="fw-normal";
        $tit.innerHTML=dato.nombre;
        const $p=document.createElement('p');
        $p.innerHTML=dato.descripcion;
        const $boton=document.createElement('button');
        $boton.className="btn btn-secondary";
        $boton.innerHTML="Ver detalles »";
        $boton.id=dato.id;
        const $ancla=document.createElement('a');
        $ancla.name=dato.nombre;
        $div.appendChild($ancla);
        $ancla.appendChild($img);
        $div.appendChild($tit);
        $div.appendChild($p);
        $div.appendChild($boton);
        $fila.appendChild($div);
    })
    $contenido.appendChild($fila);
    crearOnClick();
}

crearContenido();

function crearOnClick(){
    const $listaBotones=document.querySelectorAll("#contenido button");
    $listaBotones.forEach((boton)=>{
        boton.onclick=function(){
            window.location.href = '#arriba';
            verDetalles(boton.id);
    }
    });
}

function mostrarDest(arrDest){
    const $destacados=document.querySelector("#destacados");
    const $fila=document.querySelector('#destacados .row');
    Object.values(arrDest).forEach((dest)=>{
        const $divD=document.createElement('div');
        $divD.className="col-3";
        const $link=document.createElement('a');
        $link.href=`#${dest.nombre}`;
        const $imgD=document.createElement('img');
        $imgD.src=dest.srcFoto;
        $imgD.className='img-fluid rounded';
        $link.appendChild($imgD);
        $divD.appendChild($link);
        $fila.appendChild($divD);
    })
    $destacados.appendChild($fila);
    ocultarInicio();
}

function ocultarInicio(){
    const $divImg=document.querySelectorAll("#destacados .col-3")
    for (i=0;i<$divImg.length;i++){
        if (i>2){
            $divImg[i].className='oculto';
        }
    }
    $divImg[2].setAttribute("id","centro");
}

//FUNCIONES PARA CARROUSEL
setInterval(document.querySelector('#next').onclick=function(){
    let $visibles=document.querySelectorAll('#destacados .col-3');
    let $ocultas=document.querySelectorAll('#destacados .oculto');
    let $centro=document.querySelector('#centro');
    if ($centro==$visibles[2]){
        ocultar($visibles[0]);
        mostrar($ocultas[0]);
    } else if($centro==$visibles[1]){
        ocultar($visibles[0]);
        mostrar($ocultas[$ocultas.length-1]);
    } else if($centro==$visibles[0]){
        ocultar($visibles[0]);
        mostrarAlFinal($ocultas[0]);
    }else if($centro==$ocultas[$ocultas.length-1]){
        ocultar($visibles[1]);
        mostrarAlFinal($ocultas[0]);
    }else if($centro==$ocultas[0]){
        ocultar($visibles[$visibles.length-1]);
        mostrarAlFinal($ocultas[0]);
        removerOrden();
    }
    aclarar();
    setTimeout(function(){
        opacar();
    },500);
},5000);


function aclarar(){
    document.querySelectorAll('#destacados .col-3').forEach((div)=>{
        div.classList.remove('opaco');
        div.classList.add('claro');
    });
}

function opacar(){
    document.querySelectorAll('#destacados .col-3').forEach((div)=>{
        div.classList.add('opaco');
        div.classList.remove('claro');
    });
}

function ocultar($div){
    $div.className='oculto';
}

function mostrar($div){
    $div.className='col-3';
}

function mostrarAlFinal($div){
    $div.className='col-3 order-1';
}

function removerOrden(){
    document.querySelectorAll('#destacados .col-3').forEach((el)=>{
        el.classList.remove('order-1');
    })
}

document.querySelector('#prev').onclick=function(){
    let $visibles=document.querySelectorAll('#destacados .col-3');
    let $ocultas=document.querySelectorAll('#destacados .oculto');
    let $centro=document.querySelector('#centro');

    if ($centro==$visibles[2]){
        ocultar($visibles[$visibles.length-1]);
        mostrarAlFinal($visibles[0]);
        mostrarAlFinal($visibles[1]);
        mostrar($ocultas[$ocultas.length-1]);
    }else if($centro==$ocultas[0]){
        ocultar($visibles[1]);
        mostrar($ocultas[$ocultas.length-1]);
    }else if($centro==$ocultas[$ocultas.length-1]){
        ocultar($visibles[0]);
        mostrar($ocultas[$ocultas.length-1]);
    }else if($centro==$visibles[0]){
        ocultar($visibles[$visibles.length-1]);
        mostrar($ocultas[$ocultas.length-1]);
    }else if($centro==$visibles[1]){
        ocultar($visibles[$visibles.length-1]);
        mostrar($ocultas[0]);
    }

    aclarar();
    setTimeout(function(){
        opacar();
    },500);
    
}


//BOTONES VER DETALLES
function verDetalles(nro){
    document.querySelector('#destacados').className='oculto';
    document.querySelector('#contenido').className='oculto';
    document.querySelector("#detalles").className='container border rounded fondo';
    fetch(`https://my-json-server.typicode.com/florencianionquepan/adopcion-gatos/gato/${nro}`)
    .then(response=>response.json())
    .then(gatodata=>{
        document.querySelector("#img").src=(gatodata.srcFoto)[1];
        document.querySelector('#getId').innerHTML=nro;
        const $span=document.querySelectorAll("#detalles span");
        const $datos=[gatodata.nombre,gatodata.edad,gatodata.sexo,gatodata.raza,gatodata.color,gatodata.tipoPelo];
        for(let i=0;i<$span.length;i++){
            $span[i].innerHTML=$datos[i];
        }
        const $input=document.querySelectorAll("#detalles input");
        const $ficha=[gatodata.esterilizacion,gatodata.desparasitacion,(gatodata.vacunas)[0],(gatodata.vacunas)[1],(gatodata.vacunas)[2]];
        for (let i=0;i<$input.length;i=i+2){
            $input[i].checked=$ficha[i/2];
        }
})
.catch(error=>console.error("FALLO",error));

}



//IR A INICIO
const $inicioVolver=document.querySelector("#inicio");

$inicioVolver.onclick=function(){
    document.querySelector('#div-acceder').className='oculto';
    document.querySelector('#detalles').className='oculto';
    document.querySelector('#destacados').className='border rounded fondo m-1';
    document.querySelector('#contenido').className='text-center border rounded fondo m-5';
}

//BOTON ACCEDER
const $acceder=document.querySelector('#acceder');

$acceder.onclick=function(){
    document.querySelector('#destacados').className='oculto';
    document.querySelector('#contenido').className='oculto';
    document.querySelector('#detalles').className='oculto';
    document.querySelector('#div-acceder').className='container-md w-50 justify-content-center';
}

//ADOPTAR:
const $adoptar=document.querySelector("#adoptar");
$adoptar.onclick=function(){
    const idGato=document.querySelector('#getId').textContent;
    //console.log(idGato);
    document.querySelector("#formAdopcion").className="border rounded fondo m-3";
}

const $botonEnviar=document.querySelector('#formAdopcion button');
$botonEnviar.onclick=function(){
    validarAdopcion();
}

// Validar Formulario de Adopcion:

function validarAdopcion(){
    const $formAdopcion=document.querySelector('#formAdopcion form');
    const erroresAdopcion=validarFormulario($formAdopcion);

    let cantErrores=manejarErrores(erroresAdopcion,$formAdopcion);
    if(cantErrores===0){
        document.querySelector('#formAdopcion').className='oculto';
        document.querySelector('#exito').className='text-center';
        setTimeout(function(){
            window.location.href = 'index.html';
        },1000)
    }
    
}
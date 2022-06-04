//MOSTRAR PAGINA PRINCIPAL
function crearContenido(){
    return fetch("https://my-json-server.typicode.com/florencianionquepan/adopcion-gatos/db")
    .then(data=>data.json())
    .then(data=>mostrarGatos(data.gato))
    
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
        $div.appendChild($img);
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
            verDetalles(boton.id);
    }
    });
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
    document.querySelector('#div-acceder').className='container-md w-50 justify-content-center';
}



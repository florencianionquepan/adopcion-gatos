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
    const cantidadGatos=arrgatos.length;
    Object.values(arrgatos).forEach((dato)=>{
        console.log(dato);
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
        $boton.onclick=`verDetalles(${dato.id})`;
        $boton.innerHTML="Ver detalles »";
        $div.appendChild($img);
        $div.appendChild($tit);
        $div.appendChild($p);
        $div.appendChild($boton);
        $fila.appendChild($div);
    })
    $contenido.appendChild($fila);
    
}

crearContenido();

//BOTON ACCEDER
const $acceder=document.querySelector('#acceder');

$acceder.onclick=function(){
    document.querySelector('#destacados').className='oculto';
    document.querySelector('#contenido').className='oculto';
    document.querySelector('#div-acceder').className='container-md w-50 justify-content-center';
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
    document.querySelector("#nombre").innerHTML=gatodata.nombre;
    document.querySelector("#edad").innerHTML=gatodata.edad;
    document.querySelector("#sexo").innerHTML=gatodata.sexo;
    document.querySelector("#raza").innerHTML=gatodata.raza;
    document.querySelector("#color").innerHTML=gatodata.color;
    document.querySelector("#pelo").innerHTML=gatodata.tipoPelo;
    document.querySelector("#esterilizado").checked=gatodata.esterilizacion;
    document.querySelector("#desparasitado").checked=gatodata.desparasitacion;
    document.querySelector("#rabia").checked=(gatodata.vacunas)[0];
    document.querySelector("#tri").checked=(gatodata.vacunas)[1];
    document.querySelector("#leucemia").checked=(gatodata.vacunas)[2];
})
.catch(error=>console.error("FALLO",error));

}


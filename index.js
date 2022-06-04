function crearContenido(){
    const $contenido=document.querySelector("#contenido");
    const $fila=document.createElement('div');
    $fila.className="row";
    fetch("https://my-json-server.typicode.com/florencianionquepan/adopcion-gatos/db")
    .then(response=>response.json())
    .then(data=>{
        console.log(data.gato);
        return data;
        })
}

const cantidadGatos=data.gato.length;
for (let i=0;i++;i<1){
    let $div=document.createElement('div');
    $div.className="col-lg-4 my-3";
    let $img=document.createElement('img');
    $img.className="rounded";
    $img.src=data.gato.srcFoto[0];
    let $tit=document.createElement('h2');
    $tit.className="fw-normal";
    let $p=document.createElement('p');
    $p.innerHTML=data.gato.descripcion;
    let $boton=document.createElement('button');
    $boton.className="btn btn-secondary";
    $boton.onclick=`verDetalles(${data.gato.id})`;
    $boton.innerHTML="Ver detalles »";
    $div.appendChild($img);
    $div.appendChild($tit);
    $div.appendChild($p);
    $div.appendChild($boton);
    $fila.appendChild($div);
}

const $acceder=document.querySelector('#acceder');

$acceder.onclick=function(){
    document.querySelector('#destacados').className='oculto';
    document.querySelector('#contenido').className='oculto';
    document.querySelector('#div-acceder').className='container-md w-50 justify-content-center';
}



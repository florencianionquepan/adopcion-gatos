const $actividades = document.querySelectorAll('#actividades h3');

const $textos = document.querySelectorAll('#texto div');

//Por defecto al cargar la pagina se muestra solo la primer actividad:
$textos[0].childNodes.forEach((p) => {
    p.className = 'muyClaro';
});

function ocultarOtros() {
    for (let i = 1; i < $textos.length; i++) {
        $textos[i].className = 'oculto';
    }
}

ocultarOtros();

window.onload = function () {
    $el = $actividades[0];
    setTimeout(enfocar($el), 3000);
    let $textoPrincipal = $textos[0];
    setTimeout(mostrarTxt($textoPrincipal), 3000);
    setTimeout(mostrarBtn($textoPrincipal), 3500);
}

function enfocar($elemento) {
    $elemento.classList.add('enfocado');
}

function mostrarTxt($elemento) {
    $elemento.childNodes.forEach((p) => {
        if (p.tagName != 'BUTTON') {
            p.className = 'textoPrincipal';
        }
    });
}

function mostrarBtn($elemento) {
    $elemento.childNodes.forEach((b) => {
        if (b.tagName == 'BUTTON') {
            b.className = 'btn btn-secondary';
        }
    });
}


//Cuando paso el mouse por encima de cualquier otra actividad voy a ver el detalle de cada una, y dejo de ver la de
//voluntariado:
function verActividades() {
    for (let i = 0; i < $actividades.length; i++) {
        $actividades[i].onmouseover = function () {
            desenfocar(i);
            ocultarActividades(i);
            $textos[i].classList.remove('oculto');
            enfocar(this);
        }
    }
}

verActividades();

function desenfocar(j) {
    for (let i = 0; i < $actividades.length; i++) {
        if (i != j) {
            $actividades[i].classList.remove('enfocado');
        }
    }
}

function ocultarActividades(j) {
    for (let i = 0; i < $textos.length; i++) {
        if (i != j) {
            $textos[i].className = 'oculto';
        }
    }

}

/**
 * MOSTRAR FORMULARIO
 */

const $botonesForm = document.querySelectorAll('#texto button');
$botonesForm.forEach((b) => {
    b.onclick = function () {
        document.querySelector('#formar-parte').className = 'container mt-3';
    }
})

const radioBut = document.querySelectorAll('input[name=ocupacion]');
radioBut.forEach((radio) =>{
    radio.onchange=function(){
        if (radio.checked == true) {
            mostrarSelect(this);
        }
    }
})

function mostrarSelect(element) {
    if(element.id == 'estudio') {
        agregarEstudios();
    }else if (element.id == 'trabajo') {
        agregarTrabajos();
    }else if (element.id = 'ambas') {
        agregarTodo();
    }
}

function agregarEstudios(){
    document.querySelectorAll('#ocupacion .trabajo').forEach(t=>{
        t.classList.add('oculto');
    })
    document.querySelectorAll('#ocupacion .estudio').forEach(e=>{
        e.classList.remove('oculto');
    })
}

function agregarTrabajos(){
    document.querySelectorAll('#ocupacion .estudio').forEach(e=>{
        e.classList.add('oculto');
    })
    document.querySelectorAll('#ocupacion .trabajo').forEach(t=>{
        t.classList.remove('oculto');
    })
    document.querySelectorAll('#ocupacion .trabajo')[0].selected=true;
}

function agregarTodo(){
    document.querySelectorAll('#ocupacion option').forEach(opc=>{
        opc.classList.remove('oculto');
    })
}

agregarTrabajos();

/**
 * ENVIAR FORMULARIO
 */

function validarFormarParte() {
    const $formFormarParte = document.querySelector('#formar-parte form')
    const erroresFormarParte = validarFormulario($formFormarParte);
    /* const descripcion = $formFormarParte.descripcion.value;
    const errorDescripcion = validarDescripcion(descripcion);
    //agrego clave descripcion y value errorDescripcion
    erroresFormarParte.descripcion = errorDescripcion; */

    let cantErroresFP = manejarErrores(erroresFormarParte, $formFormarParte);

    if (cantErroresFP === 0) {
        document.querySelector('#formar-parte').className = 'oculto';
        document.querySelector('#exitoFP').className = 'text-center';
        setTimeout(function () {
            window.location.href = 'index.html';
        }, 1000)
    }
}

document.querySelector('#formar-parte button').onclick = function () {
    validarFormarParte();
}
let numSecreto = 0;
let intentos = 0;
let listaNumSor = [];
let numMaximo = 100


function asignarTexto(elemento, texto) {
let elementoHTML= document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function noDeIntento() {
   let numUsuario = parseInt(document.getElementById('noUsuario').value);

  console.log(intentos);
   if (numUsuario === numSecreto) {
   asignarTexto('p', `¡Acertaste el número secreto en ${intentos} intentos!`);
   document.getElementById('reiniciar').removeAttribute('disabled');
   

   } else {
    if (numUsuario > numSecreto) {
        asignarTexto ('p', 'El número secreto es menor');
    } else {
        asignarTexto('p', 'El número secreto es mayor');
    }
   }
   intentos++;
   limpiarCaja();

    return;
   }

function limpiarCaja(){
    let valorCaja = document.querySelector('#noUsuario')
    valorCaja.value='';
}

function genNumSecreto() {
    let numGenerado = Math.floor(Math.random()*numMaximo)+1;

    console.log(numGenerado)
    console.log(listaNumSor)
 //si ya sorteamos todos los números
     if (listaNumSor.length == numMaximo){
        asignarTexto('p', 'Ya se sortearon todos los números posibles')


     } else {

    if(listaNumSor.includes(numGenerado)){
        return genNumSecreto();
     } else {
        listaNumSor.push(numGenerado)
        return numGenerado;
    }
   
    
}
}

function mensajesIniciales(){
    asignarTexto('h1', 'Juego del número secreto');
    asignarTexto('p',`¿Cuál crees que sea el número secreto del 1 al ${numMaximo}?`)
    numSecreto = genNumSecreto();
    intentos = 1;
    }

function reiniciarJuego() {

    //limpiar caja
    limpiarCaja();

    //generar nuevo no. aleatorio, indicar mensaje inicial,limpiar no. intentos
    mensajesIniciales();
    // deshabilitar botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true')
}

mensajesIniciales();
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3


function iniciarJuego (){
  let botonMascotaJugador = document.getElementById('boton-mascota')
  botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
  
  let botonFUEGO = document.getElementById("boton-FUEGO")
  botonFUEGO.addEventListener('click',ataqueFUEGO)
  let botonAGUA = document.getElementById("boton-AGUA")
  botonAGUA.addEventListener('click',ataqueAGUA)
  let botonTIERRA = document.getElementById("boton-TIERRA")
  botonTIERRA.addEventListener('click',ataqueTIERRA)
}


function seleccionarMascotaJugador (){
  let inputHipodoge = document.getElementById ('Hipodoge')
  let inputCapipepo = document.getElementById ('Capipepo')
  let inputRatigueya = document.getElementById ('Ratigueya')
  let spanMascotaJugador = document.getElementById('Mascota-jugador')
  
  
  if(inputHipodoge.checked){
    spanMascotaJugador.innerHTML = 'Hipodoge'
  }else if (inputCapipepo.checked){
    spanMascotaJugador.innerHTML = 'Capipepo'
  }else if (inputRatigueya.checked){
    spanMascotaJugador.innerHTML = 'Ratigueya'
  }else{
    alert('Selecciona una mascota')
  }
  seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){ 
  let mascotaAleatoria = aleatorio(1,3)
  let spanMascotaEnemigo = document.getElementById("Mascota-enemigo")
  
  if (mascotaAleatoria == 1){
      spanMascotaEnemigo.innerHTML = 'Hipodoge'
    }else if (mascotaAleatoria == 2){
      spanMascotaEnemigo.innerHTML = 'Capipepo'
      
    }else{
      spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
      
    
}

function ataqueFUEGO(){
  ataqueJugador = "FUEGO"
  ataqueAleatorioEnemigo()
}
function ataqueAGUA(){
  ataqueJugador = "AGUA"
  ataqueAleatorioEnemigo()
}
function ataqueTIERRA(){
  ataqueJugador = "TIERRA"
  ataqueAleatorioEnemigo()
 }


function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1,3)
  
  if (ataqueAleatorio == 1){
    ataqueEnemigo = "FUEGO"
    
  }else if (ataqueAleatorio == 2){
    ataqueEnemigo = "AGUA"
    
  }else {
    ataqueEnemigo = "TIERRA"
    
 }
 
 combate()
}
 
 function combate (){
   let spanVidasJugador = document.getElementById("Vidas-jugador")
   let spanVidasEnemigo = document.getElementById("Vidas-enemigo")
   
   
        if(ataqueEnemigo == ataqueJugador){
          crearMensaje("EMPATE ")
        }else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA"){
          crearMensaje("GANASTE ")
          vidasEnemigo--
          spanVidasEnemigo.innerHTML = vidasEnemigo
        }else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO"){
          crearMensaje("GANASTE ")
          vidasEnemigo--
          spanVidasEnemigo.innerHTML = vidasEnemigo
        }else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA"){
          crearMensaje("GANASTE ")
          vidasEnemigo--
          spanVidasEnemigo.innerHTML = vidasEnemigo
        }else{
          crearMensaje("PERDISTE ")
          vidasJugador--
          spanVidasJugador.innerHTML = vidasJugador
        }
 }
 
 
function crearMensaje(resultado){
  let sectionMensajes = document.getElementById("mensajes")
  
  
  
  let parrafo = document.createElement("p")
  parrafo.innerHTML = "Tu mascota ataco con "+  ataqueJugador + ",la mascota del enemigo ataco con "+ ataqueEnemigo + " - "+ resultado
  
  
  sectionMensajes.appendChild(parrafo)
}  

function aleatorio(min, max){
  return Math.floor(Math.random() *(max -min +1) + min)
}




window.addEventListener('load' , iniciarJuego)
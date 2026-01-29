const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar= document.getElementById("Reiniciar")
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonTIERRA = document.getElementById("boton-TIERRA")
const botonFUEGO = document.getElementById("boton-FUEGO")
const botonAGUA = document.getElementById("boton-AGUA")
const botonReiniciar = document.getElementById ("boton-Reiniciar")


const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const inputHipodoge = document.getElementById ('Hipodoge')
const inputCapipepo = document.getElementById ('Capipepo')
const inputRatigueya = document.getElementById ('Ratigueya')
const spanMascotaJugador = document.getElementById('Mascota-jugador')

const spanMascotaEnemigo = document.getElementById("Mascota-enemigo")

const spanVidasJugador = document.getElementById("Vidas-jugador")
const spanVidasEnemigo = document.getElementById("Vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

class MOKEPON {
  constructor(nombre, foto, vida){
    this.nombre = nombre
    this.foto = foto
    this.vida = vida
  }
}

let Hipodoge = new MOKEPON("Hipodoge", "./assets/HIPODOGE.png", 5)
let Capipepo = new MOKEPON("Capipepo", "./assets/CAPIPEPO.png", 5)
let Ratigueya = new MOKEPON("Ratigueya", "./assets/RATIGUEYA.png", 5)

mokepones.push(Hipodoge,Capipepo,Ratigueya)

console.log(mokepones)

function iniciarJuego (){
  
  sectionSeleccionarAtaque.style.display = "none"
  sectionReiniciar.style.display = "none"
  
  botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
  
  botonFUEGO.addEventListener('click',ataqueFUEGO)
  
  botonAGUA.addEventListener('click',ataqueAGUA)
  
  botonTIERRA.addEventListener('click',ataqueTIERRA)
  
  
  botonReiniciar.addEventListener ("click", reiniciarJuego)
}
function seleccionarMascotaJugador (){
  
  sectionSeleccionarMascota.style.display = "none"
  sectionSeleccionarAtaque.style.display = "flex"

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
        revisarVidas()
        
 }
 function revisarVidas() {
   if (vidasEnemigo == 0) { 
     crearMensajeFinal(" FELICITACIONES! GANASTE :)")
     }else if (vidasJugador == 0) {
      crearMensajeFinal("Lo Siento,PERDISTE :(")
   }
 }
 
function crearMensaje(resultado){
  let nuevoAtaqueDelJugador = document.createElement("p")
  let nuevoAtaqueDelEnemigo = document.createElement("p")

  sectionMensajes.innerHTML = resultado
  nuevoAtaqueDelJugador.innerHTML = ataqueJugador
  nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
  ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
  ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)


}  

function crearMensajeFinal(resultadoFinal){
  sectionMensajes.innerHTML = resultadoFinal
  
  botonFUEGO.disabled = true
  
  botonAGUA.disabled= true
  
  botonTIERRA.disabled = true
  
  sectionReiniciar.style.display = "block"
  
}  
function reiniciarJuego (){
  location.reload ()
}

function aleatorio(min, max){
  return Math.floor(Math.random() *(max -min +1) + min)
}

window.addEventListener('load' , iniciarJuego)
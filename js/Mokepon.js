const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar= document.getElementById("Reiniciar")
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById ("boton-Reiniciar")
sectionReiniciar.style.display = "none"

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const spanMascotaJugador = document.getElementById('Mascota-jugador')

const spanMascotaEnemigo = document.getElementById("Mascota-enemigo")

const spanVidasJugador = document.getElementById("Vidas-jugador")
const spanVidasEnemigo = document.getElementById("Vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")

let mokepones = []
let ataqueJugador =[]
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let mascotaJugador
let mascotaEnemigo
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFUEGO 
let botonAGUA 
let botonTIERRA 
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3

class MOKEPON {
  constructor(nombre, foto, vida){
    this.nombre = nombre
    this.foto = foto
    this.vida = vida
    this.ataques = []
  }
}

let Hipodoge = new MOKEPON("Hipodoge", "./assets/HIPODOGE.png", 5)
let Capipepo = new MOKEPON("Capipepo", "./assets/CAPIPEPO.png", 5)
let Ratigueya = new MOKEPON("Ratigueya", "./assets/RATIGUEYA.png", 5)

Hipodoge.ataques.push (
  {nombre: "💧", id: "boton-AGUA"},
  {nombre: "💧", id: "boton-AGUA"},
  {nombre: "💧", id: "boton-AGUA"},
  {nombre: "🔥", id: "boton-FUEGO"},
  {nombre: "☘️", id: "boton-TIERRA"},

)
Capipepo.ataques.push (
  {nombre: "☘️", id: "boton-TIERRA"},
  {nombre: "☘️", id: "boton-TIERRA"},
  {nombre: "☘️", id: "boton-TIERRA"},
  {nombre: "💧", id: "boton-AGUA"},
  {nombre: "🔥", id: "boton-FUEGO"},
  

)
Ratigueya.ataques.push (
  {nombre: "🔥", id: "boton-FUEGO"},
  {nombre: "🔥", id: "boton-FUEGO"},
  {nombre: "🔥", id: "boton-FUEGO"},
  {nombre: "☘️", id: "boton-TIERRA"},
  {nombre: "💧", id: "boton-AGUA"},
)
mokepones.push (Hipodoge,Capipepo,Ratigueya)

function iniciarJuego(){
  
   sectionSeleccionarAtaque.style.display = "none"

  mokepones.forEach((mokepon) => {
    opcionDeMokepones = `
    <input type="radio" name="mascota" id=${mokepon.nombre} />
    <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
      <p>${mokepon.nombre}</p>
      <img src=${mokepon.foto} alt=${mokepon.nombre}>
    </label>
   `
  contenedorTarjetas.innerHTML += opcionDeMokepones

  inputHipodoge = document.getElementById ('Hipodoge')
  inputCapipepo = document.getElementById ('Capipepo')
  inputRatigueya = document.getElementById ('Ratigueya')
 })

  
  botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

  botonReiniciar.addEventListener ("click", reiniciarJuego)
}
function seleccionarMascotaJugador (){
  
  sectionSeleccionarMascota.style.display = "none"

  sectionSeleccionarAtaque.style.display = "flex"

  if(inputHipodoge.checked){
    spanMascotaJugador.innerHTML = inputHipodoge.id
    mascotaJugador = inputHipodoge.id
  }else if (inputCapipepo.checked){
    spanMascotaJugador.innerHTML = inputCapipepo.id
    mascotaJugador = inputCapipepo.id
  }else if (inputRatigueya.checked){
    spanMascotaJugador.innerHTML = inputRatigueya.id
    mascotaJugador = inputRatigueya.id
  }else{
    alert('Selecciona una mascota')
  }
  extraerAtaques(mascotaJugador)
  seleccionarMascotaEnemigo()


}
function extraerAtaques(mascotaJugador) {
  let ataques
  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador === mokepones[i].nombre) {
      ataques = mokepones[i].ataques

    }
  }
  
  mostrarAtaques(ataques)
}
function mostrarAtaques(ataques) {
  ataques.forEach((ataque) => {
    ataquesMokepon = `
    <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
    `
    contenedorAtaques.innerHTML += ataquesMokepon

  })
   botonFUEGO = document.getElementById("boton-FUEGO")
   botonAGUA = document.getElementById("boton-AGUA")
   botonTIERRA = document.getElementById("boton-TIERRA")
   botones = document.querySelectorAll(".BAtaque")

  
}
 
function secuenciaAtaque() {
  botones.forEach((boton) => {
    boton.addEventListener('click', (e) => {
      if (e.target.textContent === "🔥") {
          ataqueJugador.push("FUEGO")
          console.log(ataqueJugador)
          boton.style.background = '#112f58'
          boton.disabled = true
      } else if (e.target.textContent === "💧") {
        ataqueJugador.push("AGUA")
        console.log(ataqueJugador)
        boton.style.background = '#112f58'
        boton.disabled = true
      } else{
        ataqueJugador.push("TIERRA")
        console.log(ataqueJugador)
        boton.style.background = '#112f58'
        boton.disabled = true
      }
      ataqueAleatorioEnemigo()
    })
  })
  

}
function seleccionarMascotaEnemigo() {
  let mascotaAleatoria = aleatorio(0, mokepones.length - 1)

  spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
  ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
  secuenciaAtaque()
}




function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length -1)
  
  if (ataqueAleatorio == 0 || ataqueAleatorio ==1){
    ataqueEnemigo.push("FUEGO")
    
  }else if (ataqueAleatorio == 3 || ataqueAleatorio == 4){
    ataqueEnemigo.push("AGUA")
    
  }else {
    ataqueEnemigo.push("TIERRA")
    
 }
 console.log(ataqueEnemigo)
 iniciarPelea()
}
function iniciarPelea(){
  if (ataqueJugador.length === 5) {
    combate()
  }
}

function indexAmbosOponentes(Jugador, enemigo){
  indexAtaqueJugador = ataqueJugador[Jugador]
  indexAtaqueEnemigo = ataqueEnemigo[enemigo]

}
 
 function combate() {
  for (let index = 0; index < ataqueJugador.length; index++) {
    if(ataqueJugador[index] === ataqueEnemigo[index]) {
      indexAmbosOponentes(index, index)
      crearMensaje("EMPATE")
     } else if (ataqueJugador[index] === "FUEGO" && ataqueEnemigo[index] === "TIERRA") {
      indexAmbosOponentes(index, index)
      crearMensaje("GANASTE")
      victoriasJugador++
      spanVidasJugador.innerHTML = victoriasJugador

      } else if (ataqueJugador[index] === "AGUA" && ataqueEnemigo[index] === "FUEGO") {
      indexAmbosOponentes(index, index)
      crearMensaje("GANASTE")
      victoriasJugador++
      spanVidasJugador.innerHTML = victoriasJugador


      } else if (ataqueJugador[index] === "TIERRA" && ataqueEnemigo[index] === "AGUA") {
      indexAmbosOponentes(index, index)
      crearMensaje("GANASTE")
      victoriasJugador++
      spanVidasJugador.innerHTML = victoriasJugador


      } else{
      indexAmbosOponentes(index, index)
      crearMensaje("PERDISTE")
      victoriasEnemigo++
      spanVidasEnemigo.innerHTML = victoriasEnemigo

        }

     }
   revisarVidas()
    
  }
    
        
 
 function revisarVidas() {
   if (victoriasJugador === victoriasEnemigo) { 
     crearMensajeFinal(" ESTO FUE UN EMPATE :)")
     }else if (victoriasJugador > victoriasEnemigo) {
      crearMensajeFinal("FELICITACIONES, GANASTE :)")
   }else{
    crearMensaje("lO SIENTO, PERDISTE :(")
   }
   sectionReiniciar.style.display = "block"
 }
 
function crearMensaje(resultado){
  let nuevoAtaqueDelJugador = document.createElement("p")
  let nuevoAtaqueDelEnemigo = document.createElement("p")

  sectionMensajes.innerHTML = resultado
  nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
  nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

  ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
  ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)


}  

function crearMensajeFinal(resultadoFinal){
  sectionMensajes.innerHTML = resultadoFinal

  
  sectionReiniciar.style.display = "block"
  
}  
function reiniciarJuego (){
  location.reload ()
}

function aleatorio(min, max){
  return Math.floor(Math.random() *(max -min +1) + min)
}

window.addEventListener('load' , iniciarJuego)
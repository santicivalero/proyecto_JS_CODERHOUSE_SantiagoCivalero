//presentación

function saludar() {
    console.log("¡Hola! Te voy a ayudar a elegir la clase de personaje en un juego estilo MOBA.\n¡Empecemos!")
}

//Clase, arrays y objetos

const nroPreguntas = 3

class Personaje {
    constructor(clase, descripcion) {
        this.clase = clase
        this.descripcion = descripcion
        this.puntaje = 0
        this.imagen = ""
        this.simbolo = ""
    }
}

let guerrero = new Personaje("Guerrero", "Ataque cuerpo a cuerpo, aguante y movilidad destacables")
let mago = new Personaje("Mago", "Causa gran daño mágico a distancia con habilidades y posee buen control de masas, aunque lento y con pocas defensas.")
let soporte = new Personaje("Soporte", "Cuida de su equipo otorgándoles recursos como escudos, curaciones y mejoras de atributos, y mantiene a raya al equipo enemigo con efectos de control. Buena movilidad. Daño escaso, pierde utilidad solo.")
let tirador = new Personaje("Tirador", "Principal fuente de daño del equipo. Revienta a sus objetivos con ataques básicos rápidos a distancia. Movilidad escasa y muy vulnerable.")
let asesino = new Personaje("Asesino", "Daño explosivo, movilidad extrema. Debe asegurarse de poder diezmar rápido a su objetivo porque de lo contrario él se volverá la víctima.")
let tanque = new Personaje("Tanque", "Trata de absorber la mayor cantidad de daño posible por su equipo gracias a su elevada durabilidad. Muy buen control de masas. Habilidades lentas, poco daño cuerpo a cuerpo.")

let clases = [guerrero, mago, soporte, tirador, asesino, tanque]

let radiosChecked = 0

let puntajes = []
let indicesClasesGanadoras = []



puntajes.push(guerrero.puntaje)
puntajes.push(mago.puntaje)
puntajes.push(soporte.puntaje)
puntajes.push(tirador.puntaje)
puntajes.push(asesino.puntaje)
puntajes.push(tanque.puntaje)

//Procesar encuestas

const procesarJuegoEquipo = (e) => { //En cuanto al juego en equipo:
    console.log("Cambio!")
    console.log(e.target.value)

    switch (e.target.value) {
        case "opcion1": //Quiero conservar la mayor independencia posible en los distintos escenarios que surjan, más allá de lo que pueda aportar o no.
            puntajes[0] += 5
            puntajes[1] += 2
            puntajes[2] += 1
            puntajes[3] += 2
            puntajes[4] += 4
            puntajes[5] += 3
            break
        case "opcion2": //Prefiero un equilibrio entre la autosuficiencia y mi necesidad de los demás, así se maximizan los beneficios en el plano grupal e individual.
            puntajes[0] += 2
            puntajes[1] += 4
            puntajes[2] += 3
            puntajes[3] += 4
            puntajes[4] += 4
            puntajes[5] += 4
            break
        case "opcion3": //Si sé que mi equipo me apoya, serán retribuidos en gran manera.
            puntajes[0] += 2
            puntajes[1] += 5
            puntajes[2] += 2
            puntajes[3] += 5
            puntajes[4] += 3
            puntajes[5] += 2
            break
        case "opcion4": //Me gusta ayudar y aunque mis aportes no reluzcan a simple vista, sin mí seguramente la historia sería distinta.
            puntajes[0] += 2
            puntajes[1] += 2
            puntajes[2] += 5
            puntajes[3] += 1
            puntajes[4] += 1
            puntajes[5] += 3
    }

    for (let i = 1; i < 5; i++)
        document.getElementById(`juegoEquipoOpcion${i}`).disabled = true

    console.group(puntajes)
    radiosChecked++
    crearResultado()
    console.log(radiosChecked)
}

const procesarDesarmarEnemigo = (e) => { //Cuando se trata de desarmar al enemigo, mi principal objetivo es:
    console.log("Cambio!")
    console.log(e.target.value)

    switch (e.target.value) {
        case "opcion1": //Herir lo que sea que esté a mi alcance.
            puntajes[0] += 3
            puntajes[1] += 4
            puntajes[2] += 2
            puntajes[3] += 5
            puntajes[4] += 2
            puntajes[5] += 2
            break
        case "opcion2": //Dejarlos sin posibilidades de actuar.
            puntajes[0] += 2
            puntajes[1] += 3
            puntajes[2] += 5
            puntajes[3] += 1
            puntajes[4] += 2
            puntajes[5] += 4
            break
        case "opcion3": //Detectar debilidades y explotarlas.
            puntajes[0] += 2
            puntajes[1] += 3
            puntajes[2] += 4
            puntajes[3] += 2
            puntajes[4] += 5
            puntajes[5] += 4
            break
        case "opcion4": //Abrir brechas y meterse de lleno en la batalla.
            puntajes[0] += 3
            puntajes[1] += 1
            puntajes[2] += 3
            puntajes[3] += 1
            puntajes[4] += 3
            puntajes[5] += 5
    }

    for (let i = 1; i < 5; i++)
        document.getElementById(`desarmarEnemigoOpcion${i}`).disabled = true

    console.group(puntajes)
    radiosChecked++
    crearResultado()
    console.log(radiosChecked)
}

const procesarRelacionDaño = (e) => { //Mi relación con el daño en el juego:
    console.log("Cambio!")
    console.log(e.target.value)

    switch (e.target.value) {
        case "opcion1": //Cuanto más a salvo posible de él me encuentre, más podré redoblárselo al enemigo.
            puntajes[0] += 2
            puntajes[1] += 4
            puntajes[2] += 1
            puntajes[3] += 5
            puntajes[4] += 3
            puntajes[5] += 1
            break
        case "opcion2": //El riesgo cuando lo ocasiono es grande, pero así mismo es la recompensa si soy exitoso.
            puntajes[0] += 2
            puntajes[1] += 3
            puntajes[2] += 2
            puntajes[3] += 2
            puntajes[4] += 5
            puntajes[5] += 1
            break
        case "opcion3": //Si se atreven a meterse conmigo, sabrán lo que les espera.
            puntajes[0] += 2
            puntajes[1] += 3
            puntajes[2] += 4
            puntajes[3] += 2
            puntajes[4] += 5
            puntajes[5] += 4
    }

    for (let i = 1; i < 4; i++)
        document.getElementById(`relacionDañoOpcion${i}`).disabled = true

    console.group(puntajes)
    radiosChecked++
    crearResultado()
    console.log(radiosChecked)
}

//Manejo resultados

function crearResultado() {
    let puntajeGanador = Math.max(...puntajes)
    let indiceClaseGanadora = puntajes.indexOf(puntajeGanador)

    console.log(puntajeGanador)
    console.log(clases[indiceClaseGanadora].clase)
    console.log(radiosChecked)

    //if (radiosChecked == nroPreguntas)
    //mostrarResultado(clases[indiceClaseGanadora])
    if (radiosChecked == nroPreguntas) {
        let i = -1
        while ((i = puntajes.indexOf(puntajeGanador, i+1)) != -1)
            indicesClasesGanadoras.push(i)
        
        console.log(indicesClasesGanadoras)

        //if (radiosChecked == nroPreguntas)
        mostrarResultado(indicesClasesGanadoras)
    }

}

// function mostrarResultado(res) {
//     console.log(res.clase)
//     let tituloCard = document.getElementById("tituloCard")
//     tituloCard.innerText = res.clase
//     let textoCard = document.getElementById("textoCard")
//     textoCard.innerText = res.descripcion
//     document.getElementById("cardResultado").style.visibility = 'visible'
// }

function mostrarResultado(indices) {
    let i = 0
    while (i < indices.length) {
        console.log(clases[indices[i]].clase)
        let tituloCard = document.getElementById(`tituloCard${i+1}`)
        tituloCard.innerText = clases[indices[i]].clase
        let textoCard = document.getElementById(`textoCard${i+1}`)
        textoCard.innerText = clases[indices[i]].descripcion
        document.getElementById(`cardResultado${i+1}`).style.visibility = 'visible'

        i++
    }
}


//Resetear encuesta

function resetear() {
    for (let i = 0; i < puntajes.length; i++)
        puntajes[i] = 0
    console.log(puntajes)

    let inputs = document.querySelectorAll("input[type='radio']")
    for (let valor2 of inputs) {
        valor2.disabled = false
        valor2.checked = false 
    }  

    radiosChecked = 0
    let j = 1
    while (j <= indicesClasesGanadoras.length) {
        document.getElementById(`cardResultado${j}`).style.visibility = 'hidden'
        j++
    }

    indicesClasesGanadoras = []
    //document.getElementById("cardResultado").style.visibility = 'hidden'
}

//Eventos

document.querySelectorAll("input[name='radioJuegoEquipo']").forEach((input) => {
    input.addEventListener('change', procesarJuegoEquipo)
})

document.querySelectorAll("input[name='radioDesarmarEnemigo']").forEach((input) => {
    input.addEventListener('change', procesarDesarmarEnemigo)
})

document.querySelectorAll("input[name='radioRelacionDaño']").forEach((input) => {
    input.addEventListener('change', procesarRelacionDaño)
})

document.getElementById("botonReset").addEventListener('click', resetear)














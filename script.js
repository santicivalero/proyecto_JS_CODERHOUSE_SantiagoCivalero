//Clase, arrays, objetos y variables y constantes globales

const nroPreguntas = 4

class Personaje {
    constructor(clase, descripcion) {
        this.clase = clase
        this.descripcion = descripcion
        this.puntaje = 0
    }
}

let guerrero = new Personaje("Guerrero", "Ataque cuerpo a cuerpo, aguante y movilidad destacables")
let mago = new Personaje("Mago", "Causa gran daño mágico a distancia con habilidades y posee buen control de masas, aunque lento y con pocas defensas.")
let soporte = new Personaje("Soporte", "Cuida de su equipo otorgándoles recursos como escudos, curaciones y mejoras de atributos, y mantiene a raya al equipo enemigo con efectos de control. Daño escaso, pierde utilidad solo.")
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
    console.log(`juegoEquipo: ${e.target.value}`)

    switch (e.target.value) {
        case "opcion1": //Quiero conservar la mayor independencia posible en los distintos escenarios que surjan, más allá de lo que pueda aportar o no.
            puntajes[0] += 5
            puntajes[1] += 2
            puntajes[2] += 1
            puntajes[3] += 2
            puntajes[4] += 4
            puntajes[5] += 3
            break
        case "opcion2": //Prefiero un equilibrio entre la autosuficiencia y mi necesidad de los demás, lograr un balance en el plano grupal e individual.
            puntajes[0] += 2
            puntajes[1] += 4
            puntajes[2] += 3
            puntajes[3] += 3
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
        case "opcion4": //Me gusta ayudar y aunque mis aportes no reluzcan a simple vista, son fundamentales para la victoria.
            puntajes[0] += 2
            puntajes[1] += 2
            puntajes[2] += 5
            puntajes[3] += 1
            puntajes[4] += 1
            puntajes[5] += 3
    }

    for (let i = 1; i < 5; i++)
        document.getElementById(`juegoEquipoOpcion${i}`).disabled = true

    console.log("puntajes:")
    console.group(puntajes)
    radiosChecked++
    crearResultado()
    console.log(`radiosChecked: ${radiosChecked}`)
    updateChart()
}

const procesarDesarmarEnemigo = (e) => { //Cuando se trata de desarmar al enemigo, mi principal objetivo es:
    console.log(`desarmarEnemigo: ${e.target.value}`)

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

    console.log("puntajes:")
    console.group(puntajes)
    radiosChecked++
    crearResultado()
    console.log(`radiosChecked: ${radiosChecked}`)
    updateChart()
}

const procesarRelacionDaño = (e) => { //Mi relación con el daño en el juego:
    console.log(`relacionDaño: ${e.target.value}`)

    switch (e.target.value) {
        case "opcion1": //Cuanto más a salvo de él me encuentre, más podré redoblárselo al enemigo.
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

    console.log("puntajes:")
    console.group(puntajes)
    radiosChecked++
    crearResultado()
    console.log(`radiosChecked: ${radiosChecked}`)
    updateChart()
}

const procesarRangoAtaque = (e) => { //En cuanto al rango de ataque:
    console.log(`rangoAtaque: ${e.target.value}`)

    switch (e.target.value) {
        case "opcion1": //Me gusta la idea de tener la posibilidad de atacar de lejos.
            puntajes[0] += 2
            puntajes[1] += 5
            puntajes[2] += 3
            puntajes[3] += 5
            puntajes[4] += 2
            puntajes[5] += 2
            break
        case "opcion2": //No tengo problema si sólo puedo atacar cuerpo a cuerpo.
            puntajes[0] += 5
            puntajes[1] += 2
            puntajes[2] += 3
            puntajes[3] += 2
            puntajes[4] += 4
            puntajes[5] += 5
    }

    for (let i = 1; i < 3; i++)
        document.getElementById(`rangoAtaqueOpcion${i}`).disabled = true

    console.log("puntajes:")
    console.group(puntajes)
    radiosChecked++
    crearResultado()
    console.log(`radiosChecked: ${radiosChecked}`)
    updateChart()
}

//Manejo resultados

function crearResultado() {
    let puntajeGanador = Math.max(...puntajes)
    let indiceClaseGanadora = puntajes.indexOf(puntajeGanador)

    console.log(`puntajeGanador: ${puntajeGanador}`)
    console.log(clases[indiceClaseGanadora].clase)

    if (radiosChecked == nroPreguntas) {
        let i = -1
        while ((i = puntajes.indexOf(puntajeGanador, i + 1)) != -1)
            indicesClasesGanadoras.push(i)

        console.log("indicesClasesGanadoras:")
        console.log(indicesClasesGanadoras)

        mostrarResultado(indicesClasesGanadoras)
    }
}

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

    let j = 1
    fetch('imagenes.json')
        .then((res) => res.json())
        .then((data) => {
            data.forEach((item) => {
                let k = 0
                while (k < indices.length) {
                    let imagenRol = document.getElementById(`imagenRol${j}`)
                    if (item.indice == indices[k]) {
                        imagenRol.innerHTML = `<img src=${item.imagen}>`
                        j++
                    }
                    k++
                }
            })
        })
        .catch((error) => {
            console.log(error)
        })

    let l = 1
    while (l < 4) {
        document.getElementById(`imagenRol${l}`).style.display = 'flex'
        l++
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
        let cardResultado = document.getElementById(`cardResultado${j}`)
        cardResultado.style.visibility = 'hidden'
        cardResultado.innerHTML = `<div class="card">
            <div class="card-body">
                <h5 class="card-title" id="tituloCard${j}"></h5>
                <p class="card-text" id="textoCard${j}"> </p>
            </div>
            </section>`
        j++
    }

    for (let k = 1; k <= 3; k++) {
        let imagenRol = document.getElementById(`imagenRol${k}`)
        imagenRol.style.display = 'none'
        imagenRol.innerHTML = ""
    }

    indicesClasesGanadoras = []
    myChart.update()
}


//Cambiar vistas

function cambiarVistaNormal() {
    document.getElementById('estilosSketchy') && document.getElementById('estilosSketchy').remove()

    localStorage.setItem("estiloVista", "vistaNormal")
}

function cambiarVistaSketchy() {
    if (!document.getElementById('estilosSketchy')) {
        let link = document.createElement('link')
        link.rel = 'stylesheet'
        link.id = 'estilosSketchy'
        link.href = 'bootstrap.min.css'
        document.head.append(link)
    }

    localStorage.setItem("estiloVista", "vistaSketchy")
}

let vista = localStorage.getItem("estiloVista")

vista == "vistaNormal" ? cambiarVistaNormal() : cambiarVistaSketchy()


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

document.querySelectorAll("input[name='radioRangoAtaque']").forEach((input) => {
    input.addEventListener('change', procesarRangoAtaque)
})

document.getElementById("botonReset").addEventListener('click', resetear)

document.getElementById("botonVistaNormal").addEventListener('click', cambiarVistaNormal)

document.getElementById("botonVistaSketchy").addEventListener('click', cambiarVistaSketchy)

document.getElementById("botonOcultarMostrarGrafico").addEventListener('click', ocultarMostrarGrafico)


//Gráfico

const data = {
    labels: [
        'Guerrero',
        'Mago',
        'Soporte',
        'Tirador',
        'Asesino',
        'Tanque',
    ],
    datasets: [{
        label: 'Clases',
        data: puntajes,
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
};

const config = {
    type: 'radar',
    data: data,
    options: {
        elements: {
            line: {
                borderWidth: 3
            },
        }
    },
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);


function updateChart() {
    myChart.data.datasets[0].data = puntajes
    myChart.update()
}

function ocultarMostrarGrafico() {
    let grafico = document.getElementById('grafico')
    let mostrado = grafico.style.visibility == 'visible' ? grafico.style.visibility = 'hidden' : grafico.style.visibility = 'visible'
    this.innerHTML = (mostrado == 'visible') ? "Ocultar gráfico" : "Mostrar gráfico"
}
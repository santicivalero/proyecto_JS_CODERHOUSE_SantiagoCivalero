//presentación

function saludar() {
    console.log("¡Hola! Te voy a ayudar a elegir la clase de personaje en un juego estilo MOBA.\n¡Empecemos!")
}


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

let puntajes = []

puntajes.push(guerrero.puntaje)
puntajes.push(mago.puntaje)
puntajes.push(soporte.puntaje)
puntajes.push(tirador.puntaje)
puntajes.push(asesino.puntaje)
puntajes.push(tanque.puntaje)


function inputJuegoEquipo() {
    let opcionJuegoEquipo = document.querySelector('input[name="radioJuegoEquipo"]:checked').value;
    opcionJuegoEquipo.onchange = () => {
            switch (opcionJuegoEquipo) {
                case "opcion1":
                    puntajes[0] += 5
                    puntajes[1] += 2
                    puntajes[2] += 1
                    puntajes[3] += 2
                    puntajes[4] += 4
                    puntajes[5] += 3
                    break
                case "opcion2":
                    puntajes[0] += 2
                    puntajes[1] += 4
                    puntajes[2] += 3
                    puntajes[3] += 4
                    puntajes[4] += 4
                    puntajes[5] += 4
                    break
                case "opcion3":
                    puntajes[0] += 2
                    puntajes[1] += 5
                    puntajes[2] += 2
                    puntajes[3] += 5
                    puntajes[4] += 3
                    puntajes[5] += 2
                    break
                case "opcion4":
                    puntajes[0] += 2
                    puntajes[1] += 2
                    puntajes[2] += 5
                    puntajes[3] += 1
                    puntajes[4] += 1
                    puntajes[5] += 3
            }
        }
}

inputJuegoEquipo()
console.group(puntajes)











//pedido de datos

function inputUsuarioUso() {
    console.log("¿Qué uso mayoritario le vas a dar? (Podés seleccionar más de una opción)")

    do {
        respUso = parseInt(prompt("1) Urbano \n2) Urbano/Interurbano \n3) Offroad \n4) Cargas"))

        if ((respUso < 1) || (respUso > 4) || (!Number.isInteger(respUso)))
            alert("Ingrese una opción correcta")

    } while (respUso < 1 || respUso > 4 || isNaN(respUso))

    return(respUso)
}

function inputUsuarioCombustible() {
    console.log("¿Con qué combustible/energía se impulsará? (Podés seleccionar más de una opción)")

    do {
        respCombustible = parseInt(prompt("1) Nafta\n 2) Diésel \n3) Eléctrico \n4) Híbrido \n5) Indistinto"))

        if ((respCombustible < 1) || (respCombustible > 5) || (!Number.isInteger(respCombustible)))
            alert("Ingrese una opción correcta")

    } while (respCombustible < 1 || respCombustible > 5 || isNaN(respCombustible))

    return(respCombustible)
}

function inputUsuarioPasajeros() {
    console.log("¿Cuántos pasajeros viajarán habitualmente?")

    do {
        respPasajeros = parseInt(prompt("1) 1 ó 2 \n 2) Hasta 4 (inclusive) (o 5 si el quinto es niño) \n3) Hasta 5 (inclusive) \n4) Más de 5"))

        if ((respPasajeros < 1) || (respPasajeros > 4) || (!Number.isInteger(respPasajeros)))
            alert("Ingrese una opción correcta")

    } while (respPasajeros < 1 || respPasajeros > 4 || isNaN(respPasajeros))

    return(respPasajeros)
}

// asignaciones de datos pedidos

function procesarUso(respUso, opcionesElegidas) {
    switch (respUso) {
        case 1:
            respUso = "Urbano"
            break
        case 2:
            respUso = "Urbano/Interurbano"
            break
        case 3:
            respUso = "Offroad"
            break
        case 4:
            respUso = "Cargas"
    }

    opcionesElegidas.push(respUso)
}

function procesarCombustible(respCombustible, opcionesElegidas) {
    switch (respCombustible) {
        case 1:
            respCombustible = "Nafta"
            break
        case 2:
            respCombustible = "Diésel"
            break
        case 3:
            respCombustible = "Eléctrico"
            break
        case 4:
            respCombustible = "Híbrido"
    }

    opcionesElegidas.push(respCombustible)
}

function procesarPasajeros(respPasajeros, opcionesElegidas) {
    switch (respPasajeros) {
        case 1:
            respPasajeros = "1 ó 2"
            break
        case 2:
            respPasajeros = "Hasta 4 (inclusive) (o 5 si el quinto es niño)"
            break
        case 3:
            respPasajeros = "Hasta 5"
            break
        case 4:
            respPasajeros = "Más de 5"
    }

    opcionesElegidas.push(respPasajeros)
}

//creación y muestra de resultados por consola

function crearResultados(opcionesElegidasString, autos) {
    let resultados = []
    let resultadoPosible = []

    for(let i = 0; i < autos.length; i++) {
        let usoString = autos[i].uso
        resultadoPosible.push(usoString)
        let combustibleString = autos[i].combustible
        resultadoPosible.push(combustibleString)
        let pasajerosString = autos[i].pasajeros
        resultadoPosible.push(pasajerosString)

        if (opcionesElegidasString == resultadoPosible.join(" ")) {
            let autoString = `${autos[i].marca} ${autos[i].modelo}`
            resultados.push(autoString)
        }
        else {
            resultadoPosible.length = 0
            usoString = ""
            combustibleString = ""
            pasajerosString = ""
        }
    }

    return (resultados)
}

function mostrarResultados(resultados) {
    console.log(resultados)
}

//clases, objetos y arrays

class Auto {
    constructor(marca, modelo, uso = [], combustible = [], pasajeros) {
        this.marca = marca
        this.modelo = modelo
        this.uso = uso
        this.combustible = combustible
        this.pasajeros = pasajeros
    }
}

const opcionesElegidas = []
const autos = []

autos.push(new Auto("Volkswagwen", "Taos", "Urbano/Interurbano Offroad", "Nafta", "Hasta 5"))
autos.push(new Auto("Chevrolet", "Cruze", "Urbano/Interurbano", "Nafta", "Hasta 5"))   
autos.push(new Auto("Toyota", "Corolla", "Urbano/Interurbano", "Nafta Híbrido", "Hasta 5"))
autos.push(new Auto("Toyota", "Corolla Cross", "Urbano/Interurbano Offroad", "Nafta Híbrido", "Hasta 5"))
autos.push(new Auto("Ford", "Ka", "Urbano", "Nafta", "1 ó 2"))
autos.push(new Auto("Peugeot", "Partner Patagónica", "Urbano/Interurbano Offroad Cargas", "Nafta Diésel", "Hasta 5"))
autos.push(new Auto("Peugeot", "Partner Confort", "Urbano/Interurbano Cargas", "Nafta Diésel", "1 ó 2"))
autos.push(new Auto("Ford", "Ranger", "Urbano/Interurbano Offroad Cargas", "Nafta Diésel", "Hasta 5"))
autos.push(new Auto("Volkswagwen", "Tiguan Allspace", "Urbano/Interurbano Offroad", "Nafta", "Más de 5"))
autos.push(new Auto("Toyota", "Etios", "Urbano", "Nafta", "1 ó 2"))

//invocaciones

saludar()
let inputUso = inputUsuarioUso()
let inputCombustible = inputUsuarioCombustible()
let inputPasajeros = inputUsuarioPasajeros()
procesarUso(inputUso, opcionesElegidas)
procesarCombustible(inputCombustible, opcionesElegidas)
procesarPasajeros(inputPasajeros, opcionesElegidas)
let opcionesElegidasString = opcionesElegidas.join(" ")
let resultados = crearResultados(opcionesElegidasString, autos)
mostrarResultados(resultados)

//muestra de resultados y opciones elegidas en la página

let escribirResultados = document.getElementById("resultados")
for (let i = 0; i < resultados.length; i++)
escribirResultados.innerHTML += `<p>${resultados[i]}</p>`

let escribirOpcionesElegidas = document.createElement("article")
escribirOpcionesElegidas.innerHTML = opcionesElegidasString
escribirOpcionesElegidas.setAttribute("id", "opcionesElegidas")
escribirOpcionesElegidas.className = "row"
escribirResultados.insertAdjacentElement("afterend", escribirOpcionesElegidas)









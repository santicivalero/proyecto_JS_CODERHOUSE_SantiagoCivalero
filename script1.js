//presentación

function saludar() {
    console.log("¡Hola! Te voy a ayudar a elegir tu próximo auto.\n¡Empecemos!")
}

//pedido de datos

function inputUsuario_uso() {
    console.log("¿Qué uso mayoritario le vas a dar? (Podés seleccionar más de una opción)")

    do {
        resp_uso = parseInt(prompt("1) Urbano \n2) Urbano/Interurbano \n3) Offroad \n4) Cargas"))

        if ((resp_uso < 1) || (resp_uso > 4) || (!Number.isInteger(resp_uso)))
            alert("Ingrese una opción correcta")

    } while (resp_uso < 1 || resp_uso > 4 || isNaN(resp_uso))

    return(resp_uso)
}

function inputUsuario_combustible() {
    console.log("¿Con qué combustible/energía se impulsará? (Podés seleccionar más de una opción)")

    do {
        resp_combustible = parseInt(prompt("1) Nafta\n 2) Diésel \n3) Eléctrico \n4) Híbrido \n5) Indistinto"))

        if ((resp_combustible < 1) || (resp_combustible > 5) || (!Number.isInteger(resp_combustible)))
            alert("Ingrese una opción correcta")

    } while (resp_combustible < 1 || resp_combustible > 5 || isNaN(resp_combustible))

    return(resp_combustible)
}

function inputUsuario_pasajeros() {
    console.log("¿Cuántos pasajeros viajarán habitualmente?")

    do {
        resp_pasajeros = parseInt(prompt("1) 1 ó 2 \n 2) Hasta 4 (inclusive) (o 5 si el quinto es niño) \n3) Hasta 5 (inclusive) \n4) Más de 5"))

        if ((resp_pasajeros < 1) || (resp_pasajeros > 4) || (!Number.isInteger(resp_pasajeros)))
            alert("Ingrese una opción correcta")

    } while (resp_pasajeros < 1 || resp_pasajeros > 4 || isNaN(resp_pasajeros))

    return(resp_pasajeros)
}

// asignaciones de datos pedidos

function procesar_uso(resp_uso, opcionesElegidas) {
    switch (resp_uso) {
        case 1:
            resp_uso = "Urbano"
            break
        case 2:
            resp_uso = "Urbano/Interurbano"
            break
        case 3:
            resp_uso = "Offroad"
            break
        case 4:
            resp_uso = "Cargas"
    }

    opcionesElegidas.push(resp_uso)
}

function procesar_combustible(resp_combustible, opcionesElegidas) {
    switch (resp_combustible) {
        case 1:
            resp_combustible = "Nafta"
            break
        case 2:
            resp_combustible = "Diésel"
            break
        case 3:
            resp_combustible = "Eléctrico"
            break
        case 4:
            resp_combustible = "Híbrido"
    }

    opcionesElegidas.push(resp_combustible)
}

function procesar_pasajeros(resp_pasajeros, opcionesElegidas) {
    switch (resp_pasajeros) {
        case 1:
            resp_pasajeros = "1 ó 2"
            break
        case 2:
            resp_pasajeros = "Hasta 4 (inclusive) (o 5 si el quinto es niño)"
            break
        case 3:
            resp_pasajeros = "Hasta 5"
            break
        case 4:
            resp_pasajeros = "Más de 5"
    }

    opcionesElegidas.push(resp_pasajeros)
}

//creación y muestra de resultados

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

//invocaciones

let inputUso = inputUsuario_uso()
let inputCombustible = inputUsuario_combustible()
let inputPasajeros = inputUsuario_pasajeros()
procesar_uso(inputUso, opcionesElegidas)
procesar_combustible(inputCombustible, opcionesElegidas)
procesar_pasajeros(inputPasajeros, opcionesElegidas)
let opcionesElegidasString = opcionesElegidas.join(" ")
let resultados = crearResultados(opcionesElegidasString, autos)
mostrarResultados(resultados)


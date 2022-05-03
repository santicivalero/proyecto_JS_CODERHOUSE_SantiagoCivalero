function saludar() {
    console.log("¡Hola! Te voy a ayudar a elegir tu próximo auto.\n¡Empecemos!")
}

function inputUsuario_uso() {
    console.log("¿Qué uso mayoritario le vas a dar? (Podés seleccionar más de una opción)")

    do {
        resp_uso = parseInt(prompt("1) Urbano \n2) Urbano/Interurbano \n3) Offroad \n4) Cargas"))

        if ((resp_uso < 1) || (resp_uso > 4) || (!Number.isInteger(resp_uso)))
            alert("Ingrese una opción correcta")

    } while (resp_uso < 1 || resp_uso > 4 || isNaN(resp_uso))

    procesar_uso(resp_uso)
}

function inputUsuario_combustible() {
    console.log("¿Con qué combustible/energía se impulsará? (Podés seleccionar más de una opción)")

    do {
        resp_combustible = parseInt(prompt("1) Nafta\n 2) Diésel \n3) Eléctrico \n4) Híbrido \n5) Indistinto"))

        if ((resp_combustible < 1) || (resp_combustible > 5) || (!Number.isInteger(resp_combustible)))
            alert("Ingrese una opción correcta")

    } while (resp_combustible < 1 || resp_combustible > 5 || isNaN(resp_combustible))

    procesar_combustible(resp_combustible)
}

function inputUsuario_pasajeros() {
    console.log("¿Cuántos pasajeros viajarán habitualmente?")

    do {
        resp_pasajeros = parseInt(prompt("1) 1 ó 2 \n 2) Hasta 4 (inclusive) (o 5 si el quinto es niño) \n3) Hasta 5 (inclusive) \n4) Más de 5"))

        if ((resp_pasajeros < 1) || (resp_pasajeros > 4) || (!Number.isInteger(resp_pasajeros)))
            alert("Ingrese una opción correcta")

    } while (resp_pasajeros < 1 || resp_pasajeros > 4 || isNaN(resp_pasajeros))

    procesar_pasajeros(resp_pasajeros)
}

function procesar_uso(resp_uso) {
    // switch (resp_uso) {
    //     case 1:
    //         urbano = true
    //         break
    //     case 2:
    //         urbano_Interurbano = true
    //         break
    //     case 3:
    //         offroad = true
    //         break
    //     case 4:
    //         cargas = true
    // }

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

function procesar_combustible(resp_combustible) {
    // switch (resp_combustible) {
    //     case 1:
    //         nafta = true
    //         break
    //     case 2:
    //         diesel = true
    //         break
    //     case 3:
    //         electrico = true
    //         break
    //     case 4:
    //         hibrido = true
    //         break
    //     case 5:
    //         nafta = true
    //         diesel = true
    //         electrico = true
    //         hibrido = true
    // }

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
            break
        /*case 5:
            resp_combustible*/
    }

    opcionesElegidas.push(resp_combustible)
}

function procesar_pasajeros(resp_pasajeros) {
    // switch (resp_pasajeros) {
    //     case 1:
    //         uno_o_dos = true
    //         break
    //     case 2:
    //         hasta_4 = true
    //         break
    //     case 3:
    //         hasta_5 = true
    //         break
    //     case 4:
    //         mas_de_5 = true
    // }

    switch (resp_pasajeros) {
        case 1:
            resp_pasajeros = "1 ó 2"
            break
        case 2:
            resp_pasajeros = "Hasta 4 (inclusive) (o 5 si el quinto es niño)"
            break
        case 3:
            resp_pasajeros = "Hasta 5 (inclusive)"
            break
        case 4:
            resp_pasajeros = "Más de 5"
    }

    opcionesElegidas.push(resp_pasajeros)
}

class Auto {
    constructor(marca, modelo, uso1, uso2, uso3, combustible1, combustible2, pasajeros) {
        this.marca = marca
        this.modelo = modelo
        this.uso1 = uso1
        this.uso2 = uso2
        this.uso3 = uso3
        this.combustible1 = combustible1
        this.combustible2 = combustible2
        this.pasajeros = pasajeros
    }
}

function mostrarResultados() {
}

const opcionesElegidas = []
const autos = []
autos.push(new Auto("Volkswagwen", "Taos", "Urbano/Interurbano", "Offroad", undefined, "Nafta", undefined, "Hasta 5"))
autos.push(new Auto("Chevrolet", "Cruze", "Urbano/Interurbano", undefined, undefined, "Nafta", undefined, "Hasta 5"))   
autos.push(new Auto("Toyota", "Corolla", "Urbano/Interurbano", undefined, undefined, "Nafta", "Híbrido", "Hasta 5"))
autos.push(new Auto("Toyota", "Corolla Cross", "Urbano/Interurbano", "Offroad", undefined, "Nafta", "Híbrido", "Hasta 5"))
autos.push(new Auto("Ford", "Ka", "Urbano", undefined, undefined, "Nafta", undefined, "1 ó 2"))
autos.push(new Auto("Peugeot", "Partner Patagónica", "Urbano/Interurbano", "Offroad", "Cargas", "Nafta", "Diésel", "Hasta 5"))
autos.push(new Auto("Peugeot", "Partner Confort", "Urbano/Interurbano", "Cargas", undefined, "Nafta", "Diésel", "1 ó 2"))
autos.push(new Auto("Ford", "Ranger", "Urbano/Interurbano", "Offroad", "Cargas", "Nafta", "Diésel", "Hasta 5"))
autos.push(new Auto("Volkswagwen", "Tiguan Allspace", "Urbano/Interurbano", "Offroad", undefined, "Nafta", undefined, "Más de 5"))



inputUsuario_uso()
inputUsuario_combustible()
inputUsuario_pasajeros()
mostrarResultados()
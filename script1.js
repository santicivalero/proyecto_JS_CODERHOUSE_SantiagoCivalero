function saludar() {
    console.log("¡Hola! Te voy a ayudar a elegir tu próximo auto.\n¡Empecemos!")
}

function paso1_uso() {
    console.log("¿Qué uso mayoritario le vas a dar? (Podés seleccionar más de una opción)")

    do {
        resp_paso1 = parseInt(prompt("1) Urbano \n2) Urbano/Interurbano \n3) Offroad \n4) Cargas"))

        if ((resp_paso1 < 1) || (resp_paso1 > 4) || (!Number.isInteger(resp_paso1)))
            alert("Ingrese una opción correcta")

        switch (resp_paso1) {
            case 1:
                urbano = true
                break
            case 2:
                urbano_Interurbano = true
                break
            case 3:
                offroad = true
                break
            case 4:
                cargas = true
        }

    } while (resp_paso1 < 1 || resp_paso1 > 4 || isNaN(resp_paso1))
}

function paso2_combustible() {
    console.log("¿Con qué combustible/energía se impulsará? (Podés seleccionar más de una opción)")

    do {
        resp_paso2 = parseInt(prompt("1) Nafta\n 2) Diésel \n3) Eléctrico \n4) Híbrido \n5) Indistinto"))

        if ((resp_paso2 < 1) || (resp_paso2 > 5) || (!Number.isInteger(resp_paso2)))
            alert("Ingrese una opción correcta")

        switch (resp_paso2) {
            case 1:
                nafta = true
                break
            case 2:
                diesel = true
                break
            case 3:
                electrico = true
                break
            case 4:
                hibrido = true
                break
            case 5:
                nafta = true
                diesel = true
                electrico = true
                hibrido = true
        }

    } while (resp_paso2 < 1 || resp_paso2 > 5 || isNaN(resp_paso2))
}

function paso3_pasajeros() {
    console.log("¿Cuántos pasajeros viajarán habitualmente?")

    do {
        resp_paso3 = parseInt(prompt("1) 1 ó 2 \n 2) Hasta 4 (inclusive) (o 5 si el quinto es niño) \n3) Hasta 5 (inclusive) \n4) Más de 5"))

        if ((resp_paso3 < 1) || (resp_paso3 > 4) || (!Number.isInteger(resp_paso3)))
            alert("Ingrese una opción correcta")

        switch (resp_paso3) {
            case 1:
                uno_o_dos = true
                break
            case 2:
                hasta_4 = true
                break
            case 3:
                hasta_5 = true
                break
            case 4:
                mas_de_5 = true
        }

    } while (resp_paso3 < 1 || resp_paso3 > 4 || isNaN(resp_paso3))
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


const vwTaos = new Auto("Volkswagwen", "Taos", "Urbano/Interurbano", "Offroad", undefined, "Nafta", undefined, "Hasta 5")
const chevyCruze = new Auto("Chevrolet", "Cruze", "Urbano/Interurbano", undefined, undefined, "Nafta", undefined, "Hasta 5")
const toyotaCorolla = new Auto("Toyota", "Corolla", "Urbano/Interurbano", undefined, undefined, "Nafta", "Híbrido", "Hasta 5")
const toyotaCorollaCross = new Auto("Toyota", "Corolla Cross", "Urbano/Interurbano", "Offroad", undefined, "Nafta", "Híbrido", "Hasta 5")
const fordKa = new Auto("Ford", "Ka", "Urbano", undefined, undefined, "Nafta", undefined, "1 ó 2")
const peugeotPartnerPat = new Auto("Peugeot", "Partner Patagónica", "Urbano/Interurbano", "Offroad", "Cargas", "Nafta", "Diésel", "Hasta 5")
const peugeotPartnerCon = new Auto("Peugeot", "Partner Confort", "Urbano/Interurbano", "Cargas", undefined, "Nafta", "Diésel", "1 ó 2")
const fordRanger = new Auto("Ford", "Ranger", "Urbano/Interurbano", "Offroad", "Cargas", "Nafta", "Diésel", "Hasta 5")
const vwTiguanAllspace = new Auto("Volkswagwen", "Tiguan Allspace", "Urbano/Interurbano", "Offroad", undefined, "Nafta", undefined, "Más de 5")



paso1_uso()
paso2_combustible()
paso3_pasajeros()
//Adivinar el número

let bandera = false
let respuesta = Math.round(Math.random() * 19 + 1)

console.log(respuesta)
console.log("Adiviná el número del 1 al 20. \n\nTenés 4 intentos.")

for(let cont = 1; (cont < 5) && (bandera == false); cont++) {

    let intento = parseInt(prompt(cont +"° intento:"))

    if(intento == respuesta) 
        bandera = true
}

if(bandera == true)
    alert("¡Felicitaciones! El número era "+ respuesta)
else
    alert("Has agotado tus intentos")

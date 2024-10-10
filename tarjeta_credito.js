"use strict";

function verificarNumeroTarjeta() {
    let suma = 0;
    let longitud = numTarj.length;
    for (let i = 0; i < numTarj.length; i++) {
        let digito = parseInt(numTarj[longitud - 1 - i]);
        
        if (i % 2 === 1) {
            digito = digito * 2;
            if (digito > 9) {
                digito = digito - 9;
            }
        }
        console.log(digito);
        suma += digito;
    }
    return suma % 10 === 0;
}

let numTarj = prompt("Dame el número de la tarjeta, son 16 dígitos");

if (verificarNumeroTarjeta(numTarj)) {
    alert("El número de tarjeta es válido");
}else{
    alert("El número de tarjeta NO es válido");
}
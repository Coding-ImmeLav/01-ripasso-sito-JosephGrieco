console.log ("Funziono");

// creo la funzione che cambia il colore al body
function cambiaColore() {
    // vado a prendermi il body
    let sito = document.getElementById("body");
    // cambio il colore 
    sito.style.backgroundColor = "blue";
}

// creo una variabile da cui dipende il click
let a = 0;
// creo la funzione che cambia colore ogni volta che clicco
function cambiaSempreColore() {
    // vado a prendermi il body
    let sito = document.getElementById("body");
    // cambio il colore
    if (a === 0) {
        sito.style.backgroundColor = "red";
        a = 1;
    } 
    else if(a == 1){
        sito.style.backgroundColor = "white";
        a = 0;
    }
}
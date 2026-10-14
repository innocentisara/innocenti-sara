let totale = 0;
function acquista() {
    let prezzo = prompt("quanto costa il prodotto?");
    console.log("il tipo di prezzo: " + typeof (prezzo));
    prezzo = parseFloat(prezzo);
    if (isNaN(prezzo)) {
        alert("non è un numero, hai sbagliato!")
    } else {
        totale += prezzo;
        console.log("Totale spesa: " + totale + " ");
    }
    let p = document.getElementById("output");
    p.innerHTML = "totale: " + totale + "€";
}

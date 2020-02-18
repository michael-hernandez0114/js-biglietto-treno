var distanzia;
var eta;
var prezzoFinale;
const scontoMinore = .20;
const scontoAnziano = .40;
const prezzoPerKM = .21;

distanzia = prompt('Ciao! Da quanta distanza vuole andare?');
eta = prompt('E la sua eta?');

if (eta < 18) {
    prezzoFinale = (distanzia * prezzoPerKM) * (1 - scontoMinore);
}
else if (eta >= 18 && eta < 65) {
    prezzoFinale = distanzia * prezzoPerKM;
}
else {
    prezzoFinale = (distanzia * prezzoPerKM) * (1 - scontoAnziano);
}

if (prezzoFinale < 1) {
    prezzoFinale = Math.ceil(prezzoFinale);
}


document.getElementById('distanza').innerHTML = distanzia + 'km';
document.getElementById('eta').innerHTML = eta;
document.getElementById('prezzo-finale').innerHTML = prezzoFinale + '\u20ac';
document.getElementById('prezzo-finale').setAttribute('class','border-left border-top red');

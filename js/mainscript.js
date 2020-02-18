var distanzia;
var eta;
var prezzoFinale;
const scontoMinore = .20;
const scontoAnziano = .40;
const prezzoPerKM = .21;

distanzia = prompt('Ciao! Da quanta distanzia vuole andare?');
eta = prompt('E la sua eta?');

if (eta < 18) {
    prezzoFinale = (distanzia * prezzoPerKM) * (1 - scontoMinore);
}
else if (eta >= 18 && eta < 65) {
    prezzoFinale = (distanzia * prezzoPerKM);
}
else {
    prezzoFinale = (distanzia * prezzoPerKM) * (1 - scontoAnziano);
}

document.getElementById('distance').innerHTML = distanzia;
document.getElementById('age').innerHTML = eta;
document.getElementById('total-price').innerHTML = prezzoFinale;

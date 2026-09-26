var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var c=[], amizade=0;

var [qtd, a] = prompt().split(" ").map(Number);
for (i = 0; i<qtd; i++){
    var mapa = {runas: "", pontos: 0};
    [mapa.runas, mapa.pontos] = prompt().split(" ");
    mapa.pontos = Number(mapa.pontos);
    c[i] = mapa;
}
var vezes = Number(prompt());
var letras = prompt().split(" ");
for (i = 0; i<c.length ; i++){
    for(j = 0; j<vezes ; j++){
        if (c[i].runas === letras[j])
        amizade += c[i].pontos;
    }
}
console.log(amizade);
if(amizade >= a){
    console.log("You shall pass!");
} else {
    console.log("My precioooous");
}

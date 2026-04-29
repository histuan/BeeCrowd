var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var gasto = 12;
var tempo = Number(prompt());
var velocidade = Number(prompt());
var distancia = Number(velocidade * tempo);
var gastoTotal = Number(distancia / gasto);
console.log(gastoTotal.toFixed(3));

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var KM = Number(prompt());
var L = Number(prompt());
var consumo = Number(KM/L);
console.log(consumo.toFixed(3)+" km/l");

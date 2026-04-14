var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var tempo = Number(prompt());
var horas = parseInt(tempo/3600);
tempo = parseInt(tempo % 3600);
var minutos = parseInt(tempo/60);
tempo = parseInt(tempo % 60);
var segundos = parseInt(tempo);
console.log(`${horas}:${minutos}:${segundos}`);

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var n = +prompt(), f = [];
f.length = n;
var f = prompt().split(" ").map(Number)
console.log("Menor valor: "+Math.min(...f));
console.log("Posicao: "+f.indexOf(Math.min(...f)))

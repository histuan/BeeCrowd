var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var raio = Number(prompt());
var pi = Number(3.14159);
var volume = Number((4.0/3.0*pi*raio**3));
console.log("VOLUME = "+volume.toFixed(3));

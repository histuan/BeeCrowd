var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var n = Number(3.14159);
var raio = Number(prompt());
var area =  (n * (raio * raio));
console.log("A=" + area.toFixed(4));

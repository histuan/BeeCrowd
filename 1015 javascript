var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var [x1, y1] = prompt().split(" ").map(Number);
var [x2, y2] = prompt().split(" ").map(Number);
var distancia = Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
console.log(distancia.toFixed(4));

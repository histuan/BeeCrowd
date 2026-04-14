var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var [A, B, C] = prompt().split(" ").map(Number);
var AB = Number((A+B+Math.abs(A-B))/2);
var maior = Number((AB+C+Math.abs(AB-C))/2);
console.log(maior+" eh o maior");

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var [A, B, C] = prompt().split(" ").map(Number);
var D = (Math.pow(B,2) - 4*A*C);
var R1 = (-B + Math.sqrt(D)) / (2*A);
var R2 = (-B - Math.sqrt(D)) / (2*A);
if (A === 0 || D < 0){
    console.log("Impossivel calcular");
} else {
console.log("R1 = "+R1.toFixed(5));
console.log("R2 = "+R2.toFixed(5));
}

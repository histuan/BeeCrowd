var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var [A, B, C] = prompt().split(" ").map(Number);
var areaTR = Number(A*C/2);
var areaC = Number(3.14159*Math.pow(C,2));
var areaTP = Number((A+B)*C/2);
var areaQ = Number(Math.pow(B,2));
var areaR = Number(A*B);
console.log("TRIANGULO: "+areaTR.toFixed(3));
console.log("CIRCULO: "+areaC.toFixed(3));
console.log("TRAPEZIO: "+areaTP.toFixed(3));
console.log("QUADRADO: "+areaQ.toFixed(3));
console.log("RETANGULO: "+areaR.toFixed(3));

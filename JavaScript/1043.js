var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var [a, b, c] = prompt().split(" ").map(Number);
if (a<c+b && b<a+c && c<b+a){
    console.log("Perimetro = "+(a+b+c).toFixed(1));
} else {
    console.log("Area = "+((a+b)*c/2).toFixed(1));
}

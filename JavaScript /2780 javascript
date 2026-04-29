var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var D = Number(prompt());
if(D <= 800){
    cesta = 1;
} else if(800 > D || D <= 1400) {
    cesta = 2;
} else {
    cesta = 3;
}
console.log(cesta);

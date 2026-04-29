var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var faltando = 0;
function falta(a, b){
    if (a>b){
        faltando += a-b
    }
}
var [x, y, z] = prompt().split(" ").map(Number);
var [x1, y1, z1]= prompt().split(" ").map(Number);
falta(x1,x);
falta(y1,y);
falta(z1,z);
console.log(faltando)

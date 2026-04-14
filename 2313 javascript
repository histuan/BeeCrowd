var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var [x, y, z] = prompt().split(" ").map(Number);
if(x<y+z && y<x+z && z<x+y){
    if(x == y && x == z){
        console.log("Valido-Equilatero");
    } else if(x != y && x != z && y != z){
        console.log("Valido-Escaleno");
    } else {
        console.log("Valido-Isoceles");
    }
    if(x**2==y**2+z**2 || y**2==x**2+z**2 || z**2==x**2+y**2){
        r = "S";
    } else {
        r = "N";
    }
console.log("Retangulo: "+r);
} else {
    console.log("Invalido");
}


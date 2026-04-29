var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var a1 = Number(prompt());
var a2 = Number(prompt());
var a3 = Number(prompt());
if (a3 > a1+a2){
    t = a1*4+a2*2
} else if (a1 > a2+a3){
    t = a3*4+a2*2
} else {
    t = (a1+a3)*2
}
console.log(t)

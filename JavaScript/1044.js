var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var [A, B] = prompt().split(" ").map(Number);
if (A > B) {
    if(A % B === 0) {
        console.log("Sao Multiplos");
    } else {
        console.log("Nao sao Multiplos");
    }
} else {
    if(B % A === 0) {
        console.log("Sao Multiplos");
    } else {
        console.log("Nao sao Multiplos");
    }
}

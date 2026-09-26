var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var valores = [] = prompt().split(" ").map(Number);
var A = valores[0], total = 0
for(i = 1; i<valores.length+1; i++){
    if(valores[i] > 0 ){
        var N = valores[i]
    }
}
for(i = 0; i < N; i++){
    total +=A+i
}
console.log(total)

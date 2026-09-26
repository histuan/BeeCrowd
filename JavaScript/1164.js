var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var n = Number(prompt());
for(i = 0; i<n; i++){
    var soma = 0, teste = 0;
    var x = Number(prompt());
    for(j = 0; j<x; j++){
        if(x%j == 0){
            soma += j
        } 
    } if (soma == x){
    console.log(`${x} eh perfeito`)
    } else {
        console.log(`${x} nao eh perfeito`)
    }
}

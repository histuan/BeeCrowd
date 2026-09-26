var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var n = Number(prompt())
for(i = 0; i<n; i++){
    var total = 0
    var nome = prompt()
    var peso = Number(prompt())
    var array = prompt().split(" ").map(Number)
    for(j = 0; j<7; j++){
        total += array[j]
    }
    total -= Math.max(...array) + Math.min(...array)
    console.log(nome +" "+ (total*peso).toFixed(2))
}

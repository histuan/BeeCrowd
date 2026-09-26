var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var n = []
n.push(Number(prompt()))
for(i = 0; i<10; i++){
    n.push(n[i]*2)
    console.log("N["+i+"] = "+n[i])
}

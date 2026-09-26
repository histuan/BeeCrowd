var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var n = Number(prompt())
for(i = 0; i<n; i++){
    var f = [0,1,1]
    x = Number(prompt())
    for(j = 3; j<x+3 ; j++){
        f[j] = f[j-1]+f[j-2]
    }
    console.log("Fib("+x+") = "+ f[x])
}   

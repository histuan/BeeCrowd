var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var n = Number(prompt());
for(i = 1; n+1>i ; i++ ){
    console.log(i+" "+(i**2)+" "+(i**3));
}

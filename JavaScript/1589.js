var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var n = Number(prompt())
for(i = 0; i<n; i++){
    var [x, y] = prompt().split(" ").map(Number)
    console.log(x+y)
}

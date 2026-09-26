var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var s = 0;
for(var i = 1;i<=100;i++){
    s = s+1/i;
}
console.log((s).toFixed(2));

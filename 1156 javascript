var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var s = 0, h = 1;
for(var i = 1;h<=39;i=i*2){
    s = s+h/i;
    h = h+2;
}
console.log((s).toFixed(2));

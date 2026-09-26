var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var [n,s] = prompt().split(" ").map(Number);
s = s/n
var h = 1
for(i = 1; i<s+1; i++){
    e = h;
    for(j = 1; j<n ;j++ ){
        h++
        e = e+" "+h
    }
    h++
    console.log(e)
}

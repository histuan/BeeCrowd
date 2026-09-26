var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var x = Number(prompt());
var z = 0, r = x;
while(z<=0 || z<=x){
    z = Number(prompt())
}
for(i = 1; r<z; i++){
    r +=x+i
}
console.log(i)

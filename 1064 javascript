var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var n, t=0, m=0;
for(var a = 1; a<=6 ; a++){
    n = Number(prompt());
    if(n>0){
        t++;
        m = m+n;
    }
}
console.log(t+" valores positivos");
console.log((m/4).toFixed(1));

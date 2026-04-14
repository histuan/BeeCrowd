var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var n, t=0;
for(var a = 1; a<=6 ; a++){
    n = Number(prompt());
    if(n>0){
        t++;
    }
}
console.log(t+" valores positivos");

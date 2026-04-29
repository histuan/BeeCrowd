var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var b = 0, c = 0;
for(var a = 1 ; a <= 100 ; a++){
    var n = Number(prompt());
    if(n>b){
        b = n;
        c = a;
    }
}
console.log(b);
console.log(c);

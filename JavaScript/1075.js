var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var a = Number(prompt());
for(var b = 0 ; b <= 10000; b++){
    if(b%a == 2){
        console.log(b);
    }
}

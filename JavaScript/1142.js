var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var j = 1;
var n = Number(prompt());
for(i = 0; n>i ; i++ ){
    console.log(j+" "+(j+1)+" "+(j+2)+" PUM");
    j+=4;
}

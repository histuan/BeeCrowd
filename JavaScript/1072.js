var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var a = Number(prompt());
var inn = 0, out = 0;
for(var b = 1;b<=a;b++){
    var n = Number(prompt());
    if(n >= 10 && n <= 20){
        inn++;
    } else {
        out++;
    }
}
console.log(inn+" in");
console.log(out+" out");

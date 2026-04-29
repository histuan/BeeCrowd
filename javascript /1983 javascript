var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var qtdA = Number(prompt());
var n1 = 0;
var m1;
for(var b = 1; b<=qtdA;b++){
    var [m,n] = prompt().split(" ").map(Number);
    if(n>n1){
        n1 = n;
        m1 = m;
        }
    }
if(n1>=8){
    console.log(m1);
} else {
    console.log("Minimum note not reached");
}

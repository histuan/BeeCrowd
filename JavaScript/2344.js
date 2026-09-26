var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var r;
var n = Number(prompt())
if (n == 0){
    r = "E"
} else if(n>=1 && n<=35){
    r ="D"
} else if(n>=36 && n<=60){
    r = "C"
} else if(n>=61 && n<= 85){
    r = "B"
} else if(n>=86 && n<=100){
    r = "A"
}
console.log(r)

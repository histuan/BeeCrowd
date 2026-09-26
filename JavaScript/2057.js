var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var [hi, t, f] = prompt().split(" ").map(Number);
var tt = Number((hi + t + f));
if(tt>24){
    tt = (tt-24);
} else if(tt<0){
    tt = 24+tt;
}
console.log(tt);

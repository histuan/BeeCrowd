var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var x,y, soma = 0;
var a = Number(prompt());
var b = Number(prompt());
if (a>b){
    x = a
    y = b
} else {
    x = b
    y = a
}
for(i = y; i<x+1; i++){
    if(i %13 != 0){
        soma +=i
    }
}
console.log(soma)

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var a = Number(prompt());
var b = Number(prompt());
var soma = 0;
while(b<=a){
    if(b == a || b+1 == a || b+2 == a){
        break;
    } else if(b%2 == 0){
        b++;
    } else if(b%2 != 0){
        b = b+2;
    }
    soma = soma + b;
}
console.log(soma);

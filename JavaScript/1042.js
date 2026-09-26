var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var [a, b, c] = prompt().split(" ").map(Number);
var maior, menor, meio;
function calculo(x,y){
    if(x>y){
        meio = x;
        menor = y;
    } else {
        meio = y;
        menor = x;
    }
}
if(a>b && a>c){
    maior = a;
  calculo(b,c);
} else if(b>a && b>c) {
    maior = b;
    calculo(a,c);
} else if(c>a && c>b){
    maior = c;
    calculo(a,b);
}
console.log(menor);
console.log(meio);
console.log(maior);
console.log("");
console.log(a);
console.log(b);
console.log(c);

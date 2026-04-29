var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

for(i = 1 ; i>0 ; i++){
var [x, y] = prompt().split(" ").map(Number);
var a,b,lista = "", soma = 0;
if (x>y){
    a = x
    b = y
} else {
    a = y
    b = x
}
if (b <= 0){
    break;
}
for(i = b+1; i<a+1; i++){
    soma += i
    lista = lista+" "+i
}
soma +=b
console.log(b+lista+" Sum="+soma)
}

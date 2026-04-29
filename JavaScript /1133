var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var a,b, resultado = 0;
var x = Number(prompt());
var y = Number(prompt());
if (x>y){
    a = x
    b = y
} else {
    a = y
    b = x
}
for(i = b+1; i<a; i++){
    if(i % 5 == 2 || i % 5 == 3){
        resultado = i
        console.log(resultado)
    }
}

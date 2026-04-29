var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var a = Number(prompt());
var b,c,d,e,resultado;
if (a <= 2000){
    resultado = "Isento";
} else if (a>2000 && a<3000) {
    resultado = ("R$ "+Number((a-2000)*0.08).toFixed(2));
} else if (a>3000 && a<4500) {
    b = (a-3000);
    c = ((a-b-2000)*0.08);
    d = (b*0.18);
    resultado = ("R$ "+Number(c+d).toFixed(2));
} else {
    b = (a-4500);
    c = ((1000)*0.08);
    d = ((1500)*0.18);
    e = (b*0.28);
    resultado = ("R$ "+Number(+e+d+c).toFixed(2));
}
console.log(resultado);

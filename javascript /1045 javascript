var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var [x, y, z] = prompt().split(" ").map(Number);
var a, b, c;
function calculo (x,y){
    if(x>y){
        b = x;
        c = y;
    } else {
        b = y;
        c = x;
    }
}
if(x>y && x>z){
    a = x;
    calculo(y,z);
} else if (y>x && y>z){
    a = y;
    calculo(x,z);
} else {
    a = z;
    calculo(x,y);
}
if(a>=b+c){
    console.log("NAO FORMA TRIANGULO");
} else if(a**2 == b**2+c**2) {
    console.log("TRIANGULO RETANGULO");
} else if(a**2 > b**2 + c**2){
    console.log("TRIANGULO OBTUSANGULO");
} else if(a**2 < b**2+c**2){
    console.log("TRIANGULO ACUTANGULO");
}
if(a == b && a == c){
    console.log("TRIANGULO EQUILATERO");
} else if(a == c || b == a || b == c ){
    console.log("TRIANGULO ISOSCELES");
}

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var hora,minuto,segundo,dia
function minutoo(x,y){
    if(x>y){
        hora = hora - 1
        minuto = (60-x+y);
    } else {
        minuto = y - x;
    }
}
function diaa(){
    if(hora2 - hora1 <= 0){
    dia = dia2-dia1-1
    hora = 24-hora1+hora2
    } else {
    dia = dia2-dia1
    hora = hora2-hora1
    }
}
var [_,dia1] = prompt().split(" ").map(Number)
var [hora1,_,minuto1,_,segundo1]= prompt().split(" ").map(Number)
var [_,dia2] = prompt().split(" ").map(Number)
var [hora2,_,minuto2,_,segundo2]= prompt().split(" ").map(Number)
if(hora1 > hora2){
    hora = (24-hora1+hora2);
    minutoo(minuto1,minuto2);
    diaa()
} else if(hora1 == hora2 && minuto2 > minuto1){
    hora = hora1 - hora2 ;
    minuto = minuto2 - minuto1;
    diaa()
} else if (hora1 == hora2 && minuto2 <= minuto1){
    hora = (24-hora1+hora2);
    minutoo(minuto1,minuto2);
    diaa()
} else {
    hora = (hora2-hora1);
    minutoo(minuto1,minuto2);
    diaa()
    }
if(segundo2 - segundo1 < 0){
    segundo= 60-segundo1+segundo2
    minuto= minuto-1
    hora= hora-1
} else {
    segundo = segundo2-segundo1
    minutoo(minuto1,minuto2)
}
if(minuto<0){
    minuto = minuto+60
}
if(hora==24){
    hora = 0
    dia = dia+1
}
console.log(dia+" dia(s)")
console.log(hora+ " hora(s)")
console.log(minuto+" minuto(s)")
console.log(segundo+" segundo(s)")

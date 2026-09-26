var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var media, nota, notao=0, i = 0;
while(i<2){
    nota = Number(prompt());
    if(nota<0 || nota>10){
        console.log("nota invalida")
    } else {
        notao +=nota
        i++
    }
}
media = notao/2
console.log("media = "+media.toFixed(2))

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var media, nota, notao, i;
while(true){
    i = 0, media = 0, notao = 0
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
    while(true){
        console.log("novo calculo (1-sim 2-nao)")
        var r = Number(prompt());
        if(r == 1){
            break;
        } else if(r<1 ||r>2){
        } else {
            break
        }
        }
    if(r == 2){
    break;
    }
}

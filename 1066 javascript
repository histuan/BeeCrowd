var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var n, p=0, i=0, ps=0, ng=0;
for(var a = 1; a<=5 ; a++){
    n = Number(prompt());
    if(n%2 == 0){
        p++;
    } else {
        i++;
    }
    if(n>0){
        ps++;
    } else if(n<0){
        ng++;
    }
}
console.log(p+" valor(es) par(es)");
console.log(i+" valor(es) impar(es)");
console.log(ps+" valor(es) positivo(s)");
console.log(ng+" valor(es) negativo(s)");

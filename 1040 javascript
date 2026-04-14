var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var [n1, n2, n3, n4] = prompt().split(" ").map(Number);
var media = Number((n1*2 + n2*3 + n3*4 + n4)/10);
console.log("Media: "+media.toFixed(1));
if(media<=6.9 && media>=5.0){
    console.log("Aluno em exame.");
    var exame = Number(prompt());
    media = Number((media+exame)/2);
    if(media>=5){
        console.log("Nota do exame: "+exame.toFixed(1));
        console.log("Aluno aprovado.");
        console.log("Media final: "+media.toFixed(1));
    } else {
        console.log("Aluno reprovado.");
        console.log("Media final: "+media.toFixed(1));
    }
} else if(media>=7){
    console.log("Aluno aprovado.");
} else if(media<=5) {
    console.log("Aluno reprovado.");
}

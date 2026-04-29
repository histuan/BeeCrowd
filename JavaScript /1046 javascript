var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var [HI, HF] = prompt().split(" ").map(Number);
if (HI >= HF){
    var T = (24-HI+HF);
    console.log("O JOGO DUROU "+T+" HORA(S)");
} else {
    var T = (HF - HI);
    console.log("O JOGO DUROU "+T+" HORA(S)");
}

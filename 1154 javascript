var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var qtd = 0, soma = 0;
while(true){
    var idade = Number(prompt());
    if(idade < 0) {
        break;
    } else {
        soma = soma +idade;
        qtd++;
    }
}
console.log((soma/qtd).toFixed(2));

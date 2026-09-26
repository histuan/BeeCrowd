var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var [cdg, qtd] = prompt().split(" ").map(Number);
if (cdg == 1) {
    preco = 4.00;
} else if (cdg == 2) {
    preco = 4.50;
} else if (cdg == 3) {
    preco = 5.00;
} else if (cdg == 4) {
    preco = 2.00;
} else if (cdg == 5){
    preco = 1.50;
}
var valor = (qtd*preco);
console.log("Total: R$ "+valor.toFixed(2));

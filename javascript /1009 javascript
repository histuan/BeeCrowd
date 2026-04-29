var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var nome = prompt();
var salario = Number(prompt());
var vendas = Number(prompt());
var pagamento = salario + vendas*0.15;
console.log("TOTAL = R$ "+pagamento.toFixed(2));

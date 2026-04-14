var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var numero = Number(prompt());
var horas = Number(prompt());
var pagamento = Number(prompt());
var salario = horas*pagamento;
console.log("NUMBER = "+numero);
console.log("SALARY = U$ "+salario.toFixed(2));

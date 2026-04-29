var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var [codigo1,qtd1,valor1] = prompt().split(" ").map(Number);
var [codigo2,qtd2,valor2] = prompt().split(" ").map(Number);
var valor = qtd1*valor1+qtd2*valor2;
console.log("VALOR A PAGAR: R$ "+valor.toFixed(2));

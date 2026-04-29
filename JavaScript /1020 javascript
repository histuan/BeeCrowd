var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var tempo = Number(prompt());
var anos = parseInt(tempo/365);
tempo = Number(tempo % 365);
var meses = parseInt(tempo/30);
tempo = Number(tempo % 30);
console.log(`${anos} ano(s)`);
console.log(`${meses} mes(es)`);
console.log(`${tempo} dia(s)`);

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var A=Number(prompt());
var B=Number(prompt());
var X = (A+B);
console.log("X = "+X);

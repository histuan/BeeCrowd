var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var A = Number(prompt());
var B = Number(prompt());
PROD = A*B;
console.log("PROD = "+PROD);

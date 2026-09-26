var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var A = Number(prompt());
var B = Number(prompt());
var C = Number(prompt());
var media = (A*2+B*3+C*5)/10;
console.log("MEDIA = "+media.toFixed(1));

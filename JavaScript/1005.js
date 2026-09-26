var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var A = Number(prompt());
var B = Number(prompt());
var media = (A*3.5+B*7.5)/11;
console.log("MEDIA = "+media.toFixed(5));

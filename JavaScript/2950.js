var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var d, pSau, pSar, icm;
[d, pSau, pSar] = prompt().split(" ").map(Number);
var icm = d/(pSau+pSar);
console.log(icm.toFixed(2));

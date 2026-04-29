var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var n = +prompt(), s = 0, a = 0, b = 0, st = 0, at = 0, bt = 0;
for(i = 0; i<n; i++){
    var nome = prompt();
    var t = prompt().split(" ").map(Number);
    var f = prompt().split(" ").map(Number);
    s += f[0], st += t[0];
    b += f[1], bt += t[1];
    a += f[2], at += t[2];
}
console.log("Pontos de Saque: "+(100/st*s).toFixed(2)+" %.");
console.log("Pontos de Bloqueio: "+(100/bt*b).toFixed(2)+" %.");
console.log("Pontos de Ataque: "+(100/at*a).toFixed(2)+ " %.");

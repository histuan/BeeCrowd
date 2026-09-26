var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var f = [], resultado = 0;
var l = +prompt();
var o = prompt();
for(i = 0; i<12; i++){
    f[i] = [];
    for(j = 0; j<12; j++){
        f[i][j] = +prompt();
    }
}
if(o == "S"){
    for(i = 0; i<12; i++){
        resultado += f[l][i];
    }
} else if(o == "M"){
    for(i = 0; i<12; i++){
        resultado += f[l][i];
    }
    resultado /=12;
}
console.log(resultado.toFixed(1))

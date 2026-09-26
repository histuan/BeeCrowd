var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var f = [], resultado = 0;
var o = prompt();
for(i = 0; i<12; i++){
    f[i] = [];
    for(j = 0; j<12; j++){
        f[i][j] = +prompt();
    }
}
if(o == "S"){
    for(i = 0; i<12; i++){
        for(j = 0; j<12; j++){
            if(j>i){
            resultado += f[i][j]
            }
        }
    }
} else if(o == "M"){
    var c = 0;
    for(i = 0; i<12; i++){
        for(j = 0; j<12; j++){
            if(j>i){
                resultado += f[i][j]
                c++
            
            }
        }
    }
    resultado /= c;
}
console.log(resultado.toFixed(1))

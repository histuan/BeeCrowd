var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var naoeh = 0;
var qtd = Number(prompt());
for(i = 1;i<=qtd;i++){
    var n = Number(prompt());
    for(var q = 2; q<n;q++){
        if(n%q == 0)naoeh++;
        }
        if(naoeh == 0){
            console.log(n+" eh primo");
            naoeh=0;
        }else{
            console.log(n+" nao eh primo");
            naoeh=0;
        }
    }

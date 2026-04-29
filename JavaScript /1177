var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var f=[], x = 0;
var n = Number(prompt())
for(i = 0; i<1000; i++){
    f.push(x ++)
    if(x == n){
        x = 0
    }
    console.log("N["+i+"] = "+f[i])
}   

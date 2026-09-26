var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var x = []
for(i = 0; i<100; i++){
    x.push(Number(prompt()))
    if(x[i]<=10){
    console.log("A["+i+"] = "+x[i].toFixed(1))
    }
}

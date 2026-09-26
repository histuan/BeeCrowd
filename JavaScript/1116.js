var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var n =  Number(prompt())
for(i = 0; i<n; i++){
    var [x,y] = prompt().split(" ").map(Number)
    var d = x/y
    if ( d == Infinity || d == -Infinity){
        console.log("divisao impossivel")
    } else {
        console.log(d.toFixed(1))
    }
}

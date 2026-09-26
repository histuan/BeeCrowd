var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

while(true){
    var s = 1
    n = Number(prompt())
    if(n == 0){
        break;
    } 
    for(var i = 1; i<n; i++){
        s = s + " " +(i+1)
    }
    console.log(s)
}

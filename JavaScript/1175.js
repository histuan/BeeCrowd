var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var x = []
for(i = 0; i<20; i++){
    x.push(Number(prompt()))
}
for(i = 0; i<10; i++){
    [x[i] , x[19-i]] = [x[19-i] , x[i]]
}
for(i = 0; i<20; i++){
    console.log("N["+i+"] = "+ x[i])
}

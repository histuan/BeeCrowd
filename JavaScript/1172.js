var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var x = []
for(i = 0; i<10; i++){
    x.push([Number(prompt())])
    if(x[i] <= 0){
        x[i] = 1
    }
    console.log('X['+i+'] = '+ x[i])
}
var prompt = function(texto) { return lines.shift(); };

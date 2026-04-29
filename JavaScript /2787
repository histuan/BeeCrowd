var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var x = Number(prompt());
var y = Number(prompt());
if(x == y){
    l = 1
} else if(x%2 == 0 && y%2 == 0){
    l = 1
} else if (x%2 != 0 && y%2 != 0){
    l = 1
}else if (x%2 == 0 && y%2 != 0||y%2 == 0||x%2 !=0){
    l = 0
}
console.log(l)

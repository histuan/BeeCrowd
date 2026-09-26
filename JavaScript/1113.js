var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

for(var b = 1 ; b <= 100 ; b++ ){
    var [x,y] = prompt().split(" ").map(Number);
    if(x<y){
    console.log("Crescente");
    } else if(x>y){
    console.log("Decrescente");
    } else {
        break;
    }
}

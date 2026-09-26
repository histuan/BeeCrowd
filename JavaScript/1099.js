var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var n = Number(prompt());
for (i = 0; i < n; i++){
    var soma = 0;
    var [x,y] = prompt().split(" ").map(Number);
    if(x>y){
        a = x;
        b = y;
    } else {
        a = y;
        b = x;
    }
    for(var j = b+1; j < a; j++){
        if(j == a){
            break;
        } else if(j % 2 != 0 ) {
            soma += j;
        } 
    }
    console.log(soma);
}

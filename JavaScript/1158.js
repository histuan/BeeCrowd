var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var n = Number(prompt());
for(i = 0; n>i ; i++){
    var soma = 0;
    var [x,y] = prompt().split(" ").map(Number)
    for(j = 0, f = 0; f<y ; j++){
        if((x+j)%2 != 0 ){
            soma += x+j
            f++
            }
    }
    console.log(soma)
}

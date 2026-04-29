var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var x;
while(true){
    x = Number(prompt())
    if(x == 0){
    break;
    }
    var soma = 0;
    for(i = 0, j =0; j<5; i++){
        if((x+i)%2 == 0){
            soma +=x+i
            j++
        }
    }
    console.log(soma)
}

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

while(true){
    var [x,y] = prompt().split(" ").map(Number);
    if(x>0 && y>0){
        console.log("primeiro");
    } else if(x<0 && y>0){
        console.log("segundo");
    } else if(x<0 && y<0){
        console.log("terceiro");
    } else if(x>0 && y<0){
        console.log("quarto");
    } else {
        break;
    }
}

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var a = Number(prompt())
for(var b = 1 ; b <= a; b++){
    var c = Number(prompt())
    if(c < 0){
        if(c%2 === 0){
            console.log("EVEN NEGATIVE")
        } else {
            console.log("ODD NEGATIVE")
        }
    } else if (c > 0){
        if(c%2 === 0){
            console.log("EVEN POSITIVE")
        } else {
            console.log("ODD POSITIVE")
        }
    } else {
        console.log("NULL")
    }
}

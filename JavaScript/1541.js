var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

while(true){
    var t = 0, r = 0, d = 0;
    var[c, l, p] = prompt().split(" ").map(Number);
    if(c == 0){
        break;
    }
    d = (c*l)
    t = (d*(100/p))**0.5
    console.log(Math.floor(t))
}

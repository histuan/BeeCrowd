var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var n = Number(prompt());
for(i = 0; i<n; i++){
    var j = 0;
    var [pa, pb, g1, g2] = prompt().split(" ").map(Number);
    while(true){
        pa += pa*g1/100
        pb += pb*g2/100
        pa = Math.floor(pa)
        pb = Math.floor(pb)
        j++
        if(pa>pb || j > 100){
            break;
        }
    }if(j>100){
        console.log("Mais de 1 seculo.")
    } else {
    console.log(`${j} anos.`)
    }
}

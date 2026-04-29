var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var n = Number(prompt());
for (var i = 0; i<n ; i++ ){
    var [x,y,z] = prompt().split(" ").map(Number);
    var media = (x*2+y*3+z*5)/10;
    console.log(media.toFixed(1));
}

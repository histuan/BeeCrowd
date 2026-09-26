var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var j = 65
for(i = 1;j > 0 ; i+=3){
    j = j-5
    console.log("I="+(i)+" J="+j)
}

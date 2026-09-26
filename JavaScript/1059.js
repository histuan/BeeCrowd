var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for(var a = 2 ; a<=100 ; a+=2){
    console.log(a);
}

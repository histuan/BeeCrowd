var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var q, a=0, h=0, e=0, m=0, x=0;
q = Number(prompt());
for (i = 1; q>=i; i++){
    var [n,r] = prompt().split(" ");
    if(r == "A"){
        a++;
    } else if(r == "H"){
        h++;
    } else if (r == "E"){
        e++;
    } else if (r == "M"){
        m++;
    } else if (r == "X"){
        x++;
    }
}
console.log(x+" Hobbit(s)");
console.log(h+" Humano(s)");
console.log(e+" Elfo(s)");
console.log(a+" Anao(oes)");
console.log(m+" Mago(s)");

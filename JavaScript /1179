var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var impar = [], par = [];
for(i = 0; i<15; i++){
    n = +prompt();
    if(n %2 == 0){
        par.push(n)
    } else {
        impar.push(n)
    }
    if(par.length == 5){
        for(j = 0; j<5; j++){
            console.log(`par[${j}] = ${par[j]}`)
        }
        par = []
    } else if(impar.length == 5){
        for(j = 0; j<5; j++){
            console.log(`impar[${j}] = ${impar[j]}`)
        }
        impar = []
    }
}
for(j = 0; j<impar.length; j++){
    console.log(`impar[${j}] = ${impar[j]}`)
}
for(j = 0; j<par.length; j++){
    console.log(`par[${j}] = ${par[j]}`)
}

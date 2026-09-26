var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var al = 0, gas = 0, die = 0;
while(true){
    tipo = Number(prompt());
    if(tipo == 4){
        break;
    }
    if(tipo == 1){
        al++;
    } else if(tipo == 2){
        gas++;
    } else if(tipo == 3){
        die++;
}
}
console.log("MUITO OBRIGADO");
console.log("Alcool: "+al);
console.log("Gasolina: "+gas);
console.log("Diesel: "+die);

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var qtd = Number(prompt());
var resultado;
   function teste(x,y){
    if(b == x || b == y){
        return "Bazinga!";
    } else {
        return "Raj trapaceou!";
    }
}
for(var vezes = 1 ; vezes <= qtd; vezes++){
    var [a,b] = prompt().split(" ");
    if(a == b){
    resultado = "De novo!";
    } else if (a == "tesoura"){
       resultado = teste("papel","lagarto");
    } else if (a == "papel"){
        resultado = teste("pedra","Spock");
    } else if (a == "pedra"){
        resultado = teste("lagarto","tesoura");
    } else if (a == "lagarto"){
        resultado = teste("Spock","papel");
    } else if (a == "Spock"){
        resultado = teste("tesoura","pedra");
    }
    console.log("Caso #"+vezes+": "+resultado);
}

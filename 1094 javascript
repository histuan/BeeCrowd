var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var Co = 0, Ra = 0, Se = 0, total = Number(0)
var a = Number(prompt())
for(var b =  1; b <= a ; b++){
    var [x, y] = prompt().split(" ")
    x = Number(x);
    if(y == "C"){
         Co = Co + x
    } else if (y == "R"){
         Ra = Ra + x
    } else if (y == "S"){
         Se = Se + x
    }
    total = total + x
}
var pco = (Co/total*100)
var pra = (Ra/total*100)
var pse = (Se/total*100)
console.log("Total: "+total+" cobaias")
console.log("Total de coelhos: "+Co)
console.log("Total de ratos: "+Ra)
console.log("Total de sapos: "+Se)
console.log("Percentual de coelhos: "+ pco.toFixed(2) + " %")
console.log("Percentual de ratos: "+ pra.toFixed(2) +" %")
console.log("Percentual de sapos: "+ pse.toFixed(2) +" %")

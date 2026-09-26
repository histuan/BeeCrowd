var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var gpontos = 0, ipontos = 0, vinter = 0, vgremio =0, empates=0;
for(var i = 1;i>0;i++){
    var [inter, gremio] = prompt().split(" ").map(Number);
    if(inter > gremio){
        vinter = vinter +1;
    } else if(gremio > inter){
        vgremio = vgremio +1;
    } else {
        empates = empates +1;
    }
    console.log("Novo grenal (1-sim 2-nao)");
    var n = Number(prompt());
    if(n == 2){
        break;
    }
}
console.log(i+" grenais");
console.log("Inter:"+vinter);
console.log("Gremio:"+vgremio);
console.log("Empates:"+empates);
if(gpontos > ipontos){
    v = "Gremio";
} else {
    v = "Inter";
}
console.log(v+" venceu mais");

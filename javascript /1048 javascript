var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var sal = Number(prompt());
if(sal >= 0 && sal <= 400){
    var ajuste = 15;
} else if(sal >= 400 && sal <= 800 ){
    var ajuste = 12;
} else if(sal >= 800 && sal <= 1200){
    var ajuste = 10;
} else if(sal >= 1200 && sal <=2000){
    var ajuste = 7;
} else if(sal >= 2000){
    var ajuste = 4;
}
var aumento = (sal*ajuste/100);
var novoSal = (sal+aumento);
console.log("Novo salario: "+novoSal.toFixed(2));
console.log("Reajuste ganho: "+aumento.toFixed(2));
console.log("Em percentual: "+ajuste+" %");

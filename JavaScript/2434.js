//ver 1
//entrada de dados//
var [qtd, s] = prompt().split(" ").map(Number);
var menors = 10**4 ;
for(var i = 0; i<qtd; i++){
    var t = +prompt();
    s += t;
    if(s < menors){
        menors = s;
    }
}
//saída de dados//
console.log(menors);

//ver 2
//declaração de variaveis//
var r = [];
//entrada de dados//
var [qtd, s] = prompt().split(" ").map(Number);
for(var i = 0; i<qtd; i++){
    var t = +prompt();
    r[i] = s += t;
}
//saída de dados//
console.log(Math.min(...r));

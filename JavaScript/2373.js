// declaração de sub-rotina//
function calcula(x, y){
    if(l > c){
        return c;
    } else {
        return 0;
    }
}
//entrada de dados//
var qtd = +prompt();
var n = 0;
for(var i = 0; i<qtd; i++){
    var [l, c] = prompt().split(" ").map(Number);
    n += calcula(l,c);
}
//saída de dados//
console.log(n);

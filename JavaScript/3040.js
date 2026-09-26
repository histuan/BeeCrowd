var qtd = +prompt();
for(var i = 0; i<qtd; i++){
    var p = 0;
    var [a, d, g] = prompt().split(" ").map(Number);
    if(a >= 200 && a <= 300){
        p++;
    } 
    if(d >= 50){
        p++;
    }
    if(g >= 150){
        p++;
    }
    if(p == 3){
        console.log("Sim");
    } else {
        console.log("Nao");
    }
}

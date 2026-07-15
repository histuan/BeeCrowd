var num, s = [], aux, b = 0, m = 0;
num = +prompt();
for(var i = 0; i<num; i++){
    var cri = {c : '', n : ""};
    [cri.c, cri.n] = prompt().split(" ");
    s[i] = cri;
}
for(var i = 0; i<num-1; i++){
    for(var j = 0; j<num-i-1; j++){
        if(s[j].n > s[j+1].n){
            aux = s[j];
            s[j] = s[j+1];
            s[j+1] = aux;
        }
    }
}
for(var i = 0; i<num; i++){
    console.log(s[i].n);
    if(s[i].c == '-') m++;
    else b++;
}
console.log("Se comportaram: " +b+ " | Nao se comportaram: "+m)

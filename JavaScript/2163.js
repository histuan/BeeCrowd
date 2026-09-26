var m = [], achou = 0;
var [l, c] = prompt().split(" ").map(Number);
for(var i = 0; i<l; i++){
    var v = prompt().split(" ").map(Number);
    m[i] = v;
}
for(var i = 1; i<l-1; i++){
    for(var j = 1; j<c-1; j++){
        if(m[i][j] == 42){
            d = 0;
            if(m[i-1][j] == 7) d++;
            if(m[i+1][j] == 7) d++;
            if(m[i][j-1] == 7) d++;
            if(m[i][j+1] == 7) d++;
            if(m[i+1][j-1] == 7) d++;
            if(m[i+1][j+1] == 7) d++;
            if(m[i-1][j-1] == 7) d++;
            if(m[i-1][j+1] == 7) d++;
            if(d == 8) console.log((i+1) +" "+(j+1)), achou = 1;
        }
    }
}
if(achou == 0) console.log(0 + " " + 0);

var m = [], c = 0, r = 0;
var o = prompt();
for(i = 0; i<12; i++){
    m[i] = [];
    for(j = 0; j<12; j++){
        m[i][j] = +prompt();
    }
}
for(i = 0; i<12; i++){
    for(j = 0; j<12; j++){
        if(j>i && j+i > 11) r += m[i][j], c++;
    }
}
console.log(o == 'S'? r.toFixed(1) : (r/c).toFixed(1));

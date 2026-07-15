var n = +prompt();
var m = [];
var aux;
var r = [];
for(var i = 0; i<n; i++){
    var v = prompt().split(" ");
    m[i] = v;
}
for(var c = 0; c<51; c++){
    for(var i = 0; i<n; i++){
        for(var j = 0; j<m[i].length-1; j++){
            if(m[i][j].length < m[i][j+1].length){
                aux = m[i][j];
                m[i][j] = m[i][j+1];
                m[i][j+1] = aux;
            }
        }
    }
}
for(var i = 0; i<n; i++){
    r[i] = '';
    for(var j = 0; j<m[i].length; j++){
        if(j == m[i].length-1){
            r[i] = r[i] + m[i][j];
        }
        else {
            r[i] = r[i] + m[i][j] + " ";
        }
    }
}
for(var i = 0; i<n; i++){
    console.log(r[i]);
}

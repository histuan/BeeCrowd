var v =[], aux, r = "";
while((n = +prompt()) && !isNaN(n)){
    for(var i = 0; i<n; i++){
        var carnes = {
            t: "", v: 0
        };
        [carnes.t, carnes.v] = prompt().split(" ");
        carnes.v = +carnes.v;
        v[i] = carnes;
    }
    for(var i = 0; i<n-1; i++){
        for(var j = 0; j<n-i-1; j++){
            if(v[j].v > v[j+1].v){
                aux = v[j];
                v[j] = v[j+1];
                v[j+1] = aux;
            }
        }
    }
    for(var i = 0; i<n; i++){
        if(i == n-1) r = r+v[i].t;
        else r = r + v[i].t + " ";
    }
    console.log(r);
    r = "";
}

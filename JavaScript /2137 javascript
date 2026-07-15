var n, v = [1000], aux;
while((n = +prompt()) != 0){
    for(var i = 0; i<n; i++){
        v[i] = prompt();
    }
    for(var i = 0; i<n-1; i++){
        for(var j = 0; j<n-i-1; j++){
            if(v[j] > v[j+1]){
                aux = v[j];
                v[j] = v[j+1];
                v[j+1] = aux;
            }
        }
    }
    for(var i = 0; i<n; i++){
        console.log(v[i]);
    }
}

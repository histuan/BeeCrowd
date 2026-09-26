var num, k, n = [100], aux;
[num, k] = prompt().split(" ").map(Number);
for(var i = 0; i<num; i++){
    n[i] = prompt();
}
for(var i = 0; i<num-1; i++){
    for(var j = 0; j<num-i-1; j++){
        if(n[j] > n[j+1]){
            aux = n[j];
            n[j] = n[j+1];
            n[j+1] = aux;
        }
    }
}
console.log(n[k-1]);

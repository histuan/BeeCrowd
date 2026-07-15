#include <stdio.h>
int main(){
    int n, q, v[100], c[100], aux;
    while(scanf("%d %d",&n, &q) != EOF){
    for(int i = 0; i < n; i++){
        scanf("%d",&v[i]);
    }
    for(int i = 0; i < q; i++){
        scanf("%d",&c[i]);
    }
    for(int i = 0; i<n-1; i++){
        for(int j = 0; j<n-i-1; j++){
            if(v[j] < v[j+1]){
                aux = v[j], v[j] = v[j+1], v[j+1] = aux;
            }
        }
    }
    for(int i = 0; i<q; i++){
        printf("%d\n",v[c[i]-1]);
    }
    }
}

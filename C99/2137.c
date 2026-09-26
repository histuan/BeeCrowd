#include <stdio.h>
int main(){
    int n, v[1001], aux;
    while(scanf("%d",&n) != EOF){
        for(int i = 0; i<n; i++){
            scanf("%d",&v[i]);
        }
        for(int j = 0; j<n; j++){
            for(int i = 0; i<n-1; i++){
                if(v[i+1] < v[i]){
                    aux = v[i], v[i] = v[i+1], v[i+1] = aux; 
                } 
            }
        }
        for(int i = 0; i<n; i++){
            printf("%04d\n",v[i]);
        }
    }
}

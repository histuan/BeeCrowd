#include <stdio.h>
#include <stdlib.h>
int comparar(const void *a, const void *b){
    return (*(int*)a - *(int*)b);
}
int main(){
    int n, q, m[100000], t[100000], c = 1, achou, aux;
    while(scanf("%d %d",&n, &q) && n != 0 && q != 0){
        for(int i = 0; i<n; i++) scanf("%d",&m[i]);
        for(int i = 0; i<q; i++) scanf("%d",&t[i]);
        
        qsort(m,n, sizeof(int),comparar);
        printf("CASE# %d:\n",c);
        c++;
        for(int i = 0; i<q; i++){
            achou = 0;
            for(int j = 0; j<n; j++){
                if(t[i] == m[j]){
                    achou = 1;
                    printf("%d found at %d\n",t[i], j+1);
                    break;
                }
            }
            if (achou == 0) {
                printf("%d not found\n",t[i]);
            }
        }
    }
}

#include <stdio.h>
int main(){
    int qtd, n, p, nf = 0;
    for(int i = 1; i<101; i++){
        scanf("%d", &n);
        if(n>nf){
            nf = n;
            p = i;
        }
    }
    printf("%d\n%d\n",nf,p);
}

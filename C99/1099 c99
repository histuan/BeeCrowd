#include <stdio.h>
int main() {
    int qtd, n1, n2, x, y;
    scanf("%d",&qtd);
    for(int i = 0;i<qtd; i++){
        int soma = 0;
        scanf("%d %d", &n1, &n2);
        if(n1 > n2){
            x = n1;
            y = n2;
        } else {
            x = n2;
            y = n1;
        }
        for(int j = y+1; j<x; j++){
            if(j % 2 != 0 && j != x){
                soma+= j;
            }
        }
        printf("%d\n",soma);
    }
    return 0;
}

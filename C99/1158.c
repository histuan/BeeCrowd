#include <stdio.h>
int main() {
    int qtd, soma, n1, n2, j;
    scanf("%d",&qtd);
    for(int i = 0; i<qtd; i++){
        soma = 0;
        scanf("%d %d",&n1, &n2);
        for(int j = 0; j<n2; n1++){
            if(n1 % 2 != 0){
                soma += n1;
                n1 ++;
                j++;
            }
        }
        printf("%d\n",soma);
    }
}

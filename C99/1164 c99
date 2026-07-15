#include <stdio.h>
int main() {
    int qtd, n, soma;
    scanf("%d",&qtd);
    for(int i = 0; i<qtd; i++){
        soma = 0;
        scanf("%d",&n);
        for(int j = 1; j < n; j++){
            if(n % j == 0){
                soma += j;
            }
        }
        printf(soma == n ? "%d eh perfeito\n" : "%d nao eh perfeito\n" , n);
    }
}

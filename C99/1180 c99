#include <stdio.h>
int main() {
    int qtd, menor, p = 0; 
    scanf("%d",&qtd);
    int v[qtd];
    for(int i = 0; i<qtd; i++){
        scanf("%d", &v[i]);
    }
    menor = v[0];
    for(int i = 1; i<qtd; i++){
        if(menor > v[i]) menor = v[i], p = i;
    }
    printf("Menor valor: %d\n",menor);
    printf("Posicao: %d\n",p);
}

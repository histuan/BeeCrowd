#include <stdio.h>
int main(){
    int qtd, numero, nf;
    double nota, nof = 0;
    scanf("%d",&qtd);
    for(int i = 0; i<qtd; i++){
        scanf("%i %lf", &numero, &nota);
        if(nota > nof){
            nof = nota;
            nf = numero;
        }
    }
    if(nof<8.0){
        printf("Minimum note not reached\n");
        return 0;
    } else {
        printf("%d\n", nf);
    }
}

#include <stdio.h>
#include <string.h>
typedef struct{
    char c;
    char nome[21];
} cri;
int main() {
    int n, m = 0, b = 0;
    cri nomec[100], aux;
    scanf("%d",&n);
    for (int i = 0; i<n; i++){
        scanf(" %c %s", &nomec[i].c, nomec[i].nome);
    }
    for(int i = 0; i<n-1; i++){
        for(int j = 0; j<n-i-1; j++){
            if(strcmp(nomec[j].nome, nomec[j+1].nome)>0){
                aux = nomec[j];
                nomec[j] = nomec[j+1];
                nomec[j+1] = aux;
            }
        }
    }
    for(int i = 0; i<n; i++){
        printf("%s\n", nomec[i].nome);
        if(nomec[i].c ==  '-' ) m++;
        else b++;
    }
    printf("Se comportaram: %d | Nao se comportaram: %d\n",b,m);
}

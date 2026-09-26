#include <stdio.h>
#include <string.h>
int main() {
    int n, s;
    char nome[100][21], aux[21];
    scanf("%d %d",&n, &s);
    for(int i = 0; i<n; i++){
        scanf("%s",nome[i]);
    }
    for(int i = 0; i<n-1; i++){
        for(int j = 0; j<n-i-1; j++){
            if(strcmp(nome[j], nome[j+1])>0){
                strcpy(aux, nome[j]);
                strcpy(nome[j], nome[j+1]);
                strcpy(nome[j+1], aux);
            }
        }
    }
    printf("%s\n",nome[s-1]);
}

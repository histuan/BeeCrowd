#include <stdio.h>
#include <string.h>
int main(){
    int qtd;
    char natal[100000] = "nat";
    scanf("%d",&qtd);
    for(int i = 0; i<qtd; i++){
        strcat(natal, "a");
    }
    printf("Feliz %sl!\n",natal);
}

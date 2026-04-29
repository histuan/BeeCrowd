#include <stdio.h>
#include <string.h>
char b[20], a[20], r[20];
void func(const char * x, const char * y){
    if(strcmp(b, x) == 0 || strcmp(b,y) == 0){
        strcpy(r, "Bazinga!");
    } else {
        strcpy(r, "Raj trapaceou!");
    }
}
int main(){
    int qtd;
    scanf("%d", &qtd);
    for(int i = 1; i<=qtd; i++){
        scanf("%s %s",&a, &b);
        if(strcmp(a, b) == 0){
            strcpy(r, "De novo!");
    } else if (strcmp(a, "tesoura") == 0 ){
       func("papel","lagarto");
    } else if (strcmp(a, "papel") == 0){
        func("pedra","Spock");
    } else if (strcmp(a, "pedra") == 0){
        func("lagarto","tesoura");
    } else if (strcmp(a, "lagarto") == 0){
        func("Spock","papel");
    } else if (strcmp(a, "Spock") == 0){
        func("tesoura","pedra");
    }
    printf("Caso #%i: %s\n", i, r);
    }
}

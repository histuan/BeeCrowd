#include <stdio.h>
int main(){
    int x;
    while(1){
        scanf("%d",&x);
        if(x == 2002){
            printf("Acesso Permitido\n");
            return 0;
        } else {
            printf("Senha Invalida\n");
        }
    }
}

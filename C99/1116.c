#include <stdio.h>
int main(){
    int x, y, z, qtd;
    scanf("%d",&qtd);
    for(int i = 0; i<qtd; i++){
        scanf("%d %d",&x, &y);
        if(y == 0){
            printf("divisao impossivel\n");
        } else {
            printf("%.1lf\n",(double)x/y);
        }
    }
}

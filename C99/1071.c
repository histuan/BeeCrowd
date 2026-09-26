#include <stdio.h>
int main(){
    int x, y, a, b, soma = 0;
    scanf("%d %d",&a, &b);
    if(a > b){
        x = a;
        y = b;
    } else {
        x = b;
        y = a;
    }
    for(int i = 0; y<x; i++){
        y++;
        if(y % 2 != 0 && y != x){
            soma += y;
        }
    }
    printf("%d\n",soma);
}

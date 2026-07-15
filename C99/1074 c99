#include <stdio.h>
#include <string.h>
int main(){
    int qtd, n;
    char x[20], y[20];
    scanf("%d",&qtd);
    for(int i = 0; i<qtd; i++){
        scanf("%d",&n);
        if(n % 2 == 0){
            strcpy(x, "EVEN");
        } else {
            strcpy(x, "ODD");
        }
        if(n>0){
            strcpy(y, "POSITIVE");
        } else {
            strcpy(y, "NEGATIVE");
        }
        if(n == 0){
            printf("NULL\n");
            continue;
        }
        printf("%s %s\n",x,y);
    }
}

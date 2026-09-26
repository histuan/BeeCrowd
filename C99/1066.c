#include <stdio.h>
int main(){
    int n, p = 0, i = 0, po = 0, ne = 0;
    for(int j = 0; j<5; j++){
        scanf("%d",&n);
        if(n % 2 == 0){
            p++;
        } else {
            i++;
        }
        if(n > 0){
            po++;
        } else if(n<0) {
            ne++;
        }
    }
    printf("%d valor(es) par(es)\n",p);
    printf("%d valor(es) impar(es)\n",i);
    printf("%d valor(es) positivo(s)\n",po);
    printf("%d valor(es) negativo(s)\n",ne);
}

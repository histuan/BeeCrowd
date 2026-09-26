#include <stdio.h>
int main(){
    int qtd, n, in = 0, out = 0;
    scanf("%d",&qtd);
    for(int i = 0; i<qtd; i++){
        scanf("%d", &n);
        if(n<=20 && n>=10){
            in++;
        } else {
            out++;
        }
    }
    printf("%d in\n%d out\n",in,out);
}

#include <stdio.h>
int main(){
    int x = 1, y = 1, d[100], a, b, c;
    while(x > 0 && y > 0){
        int soma = 0;
        scanf("%d %d",&x, &y);
        if(x <= 0 || y <= 0){
            return 0;
        }
        if(x>y){
            a = x;
            b = y;
        } else {
            a = y;
            b = x;
        }
        c = b;
        for(int i = 0; c<=a; i++){
            d[i] = c;
            soma += c;
            c++;
        }
        for(int i = 0; b<=a; i++){
            b++;
            printf("%d ",d[i]);
        }
        printf("Sum=%d\n",soma);
    }
}

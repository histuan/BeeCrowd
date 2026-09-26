#include <stdio.h>
int main(){
    int x, y, a, b;
    scanf("%d %d", &x, &y);
    if(x > y){
        a = x;
        b = y;
    } else {
        a = y;
        b = x;
    }
    b++;
    while(b < a){
        if(b % 5 == 2 || b % 5 == 3){
            printf("%d\n",b);
        }
        b++;
    }
}

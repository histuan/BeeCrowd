#include <stdio.h>
int main(){
    int a, b, c, a1, b1, c1, r = 0;
    scanf("%d %d %d %d %d %d",&a, &b, &c, &a1, &b1, &c1);
    if(a<a1){
        r += a1-a;
    }
    if(b<b1){
        r += b1-b;
    }
    if(c<c1){
        r += c1-c;
    }
    printf("%d\n",r);
}

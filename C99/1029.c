#include <stdio.h>
int b = 0;
int fib(int a){
    b++;
    if(a <= 1) return a;
    return fib(a-1) + fib(a-2);
}
int main() {
    int n, r;
    scanf("%d",&r);
    for(int i = 0; i<r; i++){
        b = 0;
        scanf("%d",&n);
        printf("fib(%d) = %d calls = %d\n",n,b-1,fib(n));
    }
}

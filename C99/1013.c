#include <stdio.h>
#include <stdlib.h>
int main(){
    int a, b, c, ab, abc;
    scanf("%i %i %i", &a, &b, &c);
    ab = (a+b+abs(a-b))/2;
    abc = (ab+c+abs(ab-c))/2;
    printf("%i eh o maior\n",abc);
    return 0;
}

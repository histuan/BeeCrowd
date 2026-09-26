#include <stdio.h>
int main(){
    int a,b,d;
    double c;
    scanf("%i %i",&a, &b);
    d = a*b;
    c = d/12.0;
    printf("%.3lf\n",c);
    return 0;
}

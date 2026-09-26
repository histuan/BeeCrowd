#include <stdio.h>
int main(){
    double x, y, z, a, b, c, d, e;
    scanf("%lf %lf %lf",&x , &y , &z);
    a = x*z/2;
    b = 3.14159*z*z;
    c = (x+y)*z/2;
    d = y*y;
    e = x*y;
    printf("TRIANGULO: %.3lf\nCIRCULO: %.3lf\nTRAPEZIO: %.3lf\nQUADRADO: %.3lf\nRETANGULO: %.3lf\n",a,b,c,d,e);
    return 0;
}

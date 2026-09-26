#include <stdio.h>
int main(){
    int c1, n1, c2, n2;
    double v1, v2, vf;
    scanf("%i %i %lf %i %i %lf", &c1, &n1, &v1, &c2, &n2, &v2);
    vf = (n1*v1)+(n2*v2);
    printf("VALOR A PAGAR: R$ %.2lf\n",vf);
    return 0;
}

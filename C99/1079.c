#include <stdio.h>
int main(){
    double qtd, n1, n2, n3;
    scanf("%lf",&qtd);
    for(int i = 0; i<qtd;i++){
        scanf("%lf %lf %lf",&n1, &n2, &n3);
        printf("%.1lf\n",(n1*2+n2*3+n3*5)/10);
    }
}

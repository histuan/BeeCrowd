#include <stdio.h>
#include <math.h>
int main(){
    double a, b, c, d;
    while(1){
        scanf("%lf %lf %lf", &a, &b, &c);
        if(a == 0){
            return 0;
        }
        d = (a*b)*(100/c);
        d = sqrt(d);
        printf("%.0lf\n", floor(d));
    }
}

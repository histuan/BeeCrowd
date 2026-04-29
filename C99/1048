#include <stdio.h>
int main(){
    double s, r, sf;
    int p;
    scanf("%lf", &s);
    if(s <= 400){
        p = 15;
    } else if(s >= 400 && s<= 800){
        p = 12;
    } else if(s >= 800 && s<=1200){
        p = 10;
    } else if(s >= 1200 && s<= 2000){
        p = 7;
    } else if(s > 2000){
        p = 4;
    }
    r = s *p/100;
    sf = s+r;
    printf("Novo salario: %.2lf\n",sf);
    printf("Reajuste ganho: %.2lf\n",r);
    printf("Em percentual: %i %\n",p);
}

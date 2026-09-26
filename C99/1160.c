#include <stdio.h>
int main() {
    int qtd, pa, pb, a;
    double g1, g2;
    scanf("%d",&qtd);
    for(int i = 0; i<qtd; i++){
        a = 0;
        scanf("%d %d %lf %lf",&pa, &pb, &g1, &g2);
        while(pa <= pb){
            pa += pa * g1/100.0;
            pb += pb * g2/100.0;
            a++;
            if(a > 100){
                break;
            }
        }
        printf(a <= 100 ? "%d anos.\n" : "Mais de 1 seculo.\n", a);
    }
}

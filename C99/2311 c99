#include <stdio.h>
#include <string.h>
int main(){
    int qtd;
    double d, n[7], maior, menor, total;
    char t[100];
    scanf("%d", &qtd);
    for(int i = 0; i<qtd; i++){
        total = 0;
        scanf("%s",&t);
        scanf("%lf",&d);
        for(int j = 0; j<7; j++){
            scanf("%lf",&n[j]);
            total += n[j];
            menor = (j == 0|| menor>n[j]) ? n[j] : menor;
            maior = (j == 0 || maior<n[j]) ? n[j] : maior;
        }
        total-=menor+maior;
        printf("%s %.2lf\n", t, total*d);
    }
}

#include <stdio.h>
int main() {
    int c;
    scanf("%d",&c);
    double total[c];
    for(int i = 0; i<c; i++){
        int qtd, media = 0;
        scanf("%i", &qtd);
        double n [qtd], casos = 0;
        for(int j = 0; j<qtd; j++){
            scanf("%lf", &n[j]);
            media += n[j];
        }
        media /= qtd;
        for(int j = 0; j<qtd; j++){
            if(n[j]>media){
                casos++;
            }
        }
        total[i] = casos*100/qtd;
    }
    for(int o = 0; o<c; o++){
        printf("%.3lf%\n",total[o]);
    }
}

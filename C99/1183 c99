#include <stdio.h>
int main(){
    double m[12][12], soma = 0;
    int d = 0;
    char c;
    scanf(" %c", &c);
    for(int i = 0; i<12; i++){
        for(int j = 0; j<12; j++){
            scanf("%lf",&m[i][j]);
        }
    }
    for(int i = 0; i < 12; i++){
        for(int j = i+1; j<12; j++){
            d++;
            soma += m[i][j];
        }
    }
    if(c == 'S') printf("%.1lf\n",soma);
    else printf("%.1lf\n",soma/d);
}

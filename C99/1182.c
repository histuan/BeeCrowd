#include <stdio.h>
int main(){
    double m[12][12], soma = 0;
    int n;
    char c;
    scanf("%d %c",&n, &c);
    for(int i = 0; i < 12; i++){
        for(int j = 0; j<12; j++){
            scanf("%lf",&m[i][j]);
        }
    }
    for(int i = 0; i<12; i++){
        soma += m[i][n];
    }
    if(c == 'S') printf("%.1lf\n",soma);
    else printf("%.1lf\n",soma/12);
}

#include <stdio.h>
int main(){
    double m[12][12], soma;
    char o;
    int v = 0;
    scanf("%c",&o);
    for(int i = 0 ; i<12; i++){
        for(int j = 0; j<12; j++){
            scanf("%lf",&m[i][j]);
        }
    }
    for(int i = 0; i<11; i++){
        for(int j = 0 ; j<11-i; j++){
            soma+= m[i][j];
            v++;
        }
    }
    printf("%.1lf\n", o == 'S'? soma : soma/v);
}

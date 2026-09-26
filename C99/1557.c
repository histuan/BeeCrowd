#include <stdio.h>
#include <math.h>
int main() {
    int m[15][15], n;
    while(scanf("%d",&n) && n != 0){
        for(int i = 0; i<n; i++){
            for(int j = 0; j<n; j++){
                m[i][j] = 1 << i+j;
            }
        }
        int d = (int)log10(m[n-1][n-1])+1;
        for(int i = 0; i<n; i++){
            for(int j = 0; j<n; j++){
                printf(j == n-1? "%*d\n" : "%*d ",d, m[i][j]);
            }
        }
        printf("\n");
    }
}

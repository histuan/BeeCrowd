#include <stdio.h>
#include <stdlib.h>
int main() {
    int m[100][100], n;
    while(scanf("%d",&n) && n != 0){
        for(int i = 0; i<n; i++){
            for(int j = 0; j<n; j++){
                m[i][j] = abs(i-j)+1;
            }
        }
        for(int i = 0; i<n; i++){
            for(int j = 0; j<n; j++){
                printf(j == n-1? "%3d\n" : "%3d ",m[i][j]);
            }
        }
        printf("\n");
    }
}

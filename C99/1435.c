#include <stdio.h>
int menor(int a, int b, int c, int d){
    int min = a;
    if(b < min) min = b;
    if(c < min) min = c;
    if(d < min) min = d;
    return min;
}
int main() {
    int m[100][100], n;
    while(scanf("%d",&n) && n != 0){
        for(int i = 0; i<n; i++){
            for(int j = 0; j<n; j++){
                m[i][j] = menor(i, j, n-i-1, n-j-1)+1;
            }
        }
        for(int i = 0; i<n; i++){
            for(int j = 0; j<n; j++){
                printf(j == n-1 ? "%3d\n" : "%3d ",m[i][j]);
            }
        }
        printf("\n");
    }
}

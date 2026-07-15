#include <stdio.h>
int f(int a, int b, int c){
    int r;
    if(c%2 != 0 && a == c/2 && b == c/2) r = 4;
    else if(a >= c/3 && b >= c/3 && b+c/3<c && a+c/3<c) r = 1;
    else if(a == b) r = 2;
    else if(a + b == c-1) r = 3;
    else r = 0;
    return r;
}
int main() {
    int m[105][105], n;
    while(scanf("%d",&n) !=EOF){
        for(int i = 0; i<n; i++){
            for(int j = 0; j<n; j++){
                m[i][j] = f(i,j,n);
            }
        }
        for(int i = 0; i<n; i++){
            for(int j = 0; j<n; j++){
                printf(j == n-1? "%d\n" : "%d",m[i][j]);
            }
        }
        printf("\n");
    }
}

#include <stdio.h>
int r(int a, int b, int c){
    int re;
    if(a + b == c - 1 ) re = 2;
    else if(a == b) re = 1;
    else re = 3;
    return re;
}
int main() {
    int m[100][100], n;
    while(scanf("%d",&n) != EOF){
        for(int i = 0; i<n; i++){
            for(int j = 0; j<n; j++){
                m[i][j] = r(i, j, n);
            }
        }
        for(int i = 0; i<n; i++){
            for(int j = 0; j<n; j++){
                printf(j == n-1? "%d\n" : "%d",m[i][j]);
            }
        }
    }
}

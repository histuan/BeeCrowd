#include <stdio.h>
int qtd(int a[100][100], int b, int c, int n1, int m1){
    int d = 0;
    if (a[b][c] == 1) return 9;
    if (b-1 >= 0 && a[b-1][c] == 1) d++;
    if (b+1 < n1 && a[b+1][c] == 1) d++;
    if (c-1 >= 0 && a[b][c-1] == 1) d++;
    if (c+1 < m1 && a[b][c+1] == 1) d++;
    return d;
}
int main() {
    int n, m, f[100][100];
    while(scanf("%d %d",&n, &m) != EOF){
        for(int i = 0; i<n; i++){
            for(int j = 0; j<m; j++){
                scanf("%d",&f[i][j]);
            }
        }
        for(int i = 0; i<n; i++){
            for(int j = 0; j<m; j++){
                printf(j ==m-1? "%d\n":"%d",qtd(f, i, j, n, m));
            }
        }
    }
}

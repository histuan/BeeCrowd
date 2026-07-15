#include <stdio.h>
#include <math.h>
int distancia(int a[100][4], int b, int c){
    double r = 0;
    r += pow(a[b][0] - a[c][0],2);
    r += pow(a[b][1] - a[c][1],2);
    r += pow(a[b][2] - a[c][2],2);
    r = sqrt(r);
    return r;
}
int main() {
    int n, d, f[100][4], p[100][100];
    scanf("%d",&n);
    for(int i = 0; i<n; i++){
        for(int j = 0; j<3; j++){
            scanf("%d",&f[i][j]);
        }
    }
    for(int i = 0; i <n; i++){
        for(int j = 0; j < n; j++){
            if(i != j)p[i][j] = distancia(f, i, j);
            else p[i][j] = 10000;
        }
    }
    for(int i = 0; i<n; i++){
        d = 0;
        for(int j = 0; j<n; j++){
            if(d == 0) d = p[i][j];
            if(d>p[i][j]) d = p[i][j];
        }
        if(d <20) printf("A\n");
        else if(d>=20 && d<50) printf("M\n");
        else printf("B\n");
    }
}

#include <stdio.h>
int main() {
    int n, m, l, cm, cl, a;
    while(scanf("%d",&n)!=EOF){
        scanf("%d %d",&m, &l);
        int c[m+l][n];
        for(int i = 0; i<m+l; i++){
            for(int j = 0; j<n; j++){
                scanf("%d",&c[i][j]);
            }
        }
        scanf("%d %d",&cm, &cl);
        scanf("%d",&a);
        if(c[cm-1][a-1]>c[m+cl-1][a-1])printf("Marcos\n");
        else if(c[m+cl-1][a-1]>c[cm-1][a-1])printf("Leonardo\n");
        else printf("Empate\n");
    }
}

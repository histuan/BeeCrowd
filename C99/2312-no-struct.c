#include <stdio.h>
#include <string.h>
int main(){
    int v[500][3], *l[500], n, *auxn, empatado = 1;
    char p[500][50], auxp[500];
    scanf("%d",&n);
    for(int i = 0; i<n; i++){
        scanf("%s %d %d %d",p[i],&v[i][0],&v[i][1],&v[i][2]);
        l[i] = v[i];
    }
    for(int i = 0; i<n-1; i++){
        for(int j = 0; j<n-i-1; j++){
            empatado = 1;
            for(int c = 0; c<3; c++){
                if(l[j+1][c] == l[j][c]){
                    continue;
                }
                if(l[j+1][c] > l[j][c]){
                    auxn = l[j+1], l[j+1] = l[j], l[j] = auxn;
                    strcpy(auxp, p[j+1]), strcpy(p[j+1],p[j]);
                    strcpy(p[j], auxp);
                    empatado = 0;
                    break;
                } else {
                    empatado = 0; 
                    break;
                }
            }
            if(empatado == 1){
                if(strcmp(p[j], p[j+1])>0){
                    strcpy(auxp, p[j+1]), strcpy(p[j+1], p[j]);
                    strcpy(p[j], auxp);
                }
            }
        }
    }
    for(int i = 0; i < n; i++){
        printf("%s %d %d %d\n",p[i], l[i][0], l[i][1], l[i][2]);
    }
}

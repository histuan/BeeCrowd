#include <stdio.h>
#include <string.h>
int main(){
    int num, empatado;
    typedef struct{
        char n[500];
        int m[3];
    } times;
    times t[500], aux;
    scanf("%d",&num);
    for(int i = 0; i<num; i++){
        scanf("%s %d %d %d", t[i].n, &t[i].m[0], &t[i].m[1], &t[i].m[2]);
    }
    for(int i = 0; i<num-1; i++){
        for(int j = 0; j<num-i-1; j++){
            empatado = 1;
            for(int c = 0; c<3; c++){
                if(t[j].m[c] == t[j+1].m[c]){
                    continue;
                }
                if(t[j].m[c] < t[j+1].m[c]){
                    aux = t[j], t[j] = t[j+1], t[j+1] = aux;
                    empatado = 0;
                    break;
                } else {
                    empatado = 0;
                    break;
                }
            }
            if(empatado == 1){
                if(strcmp(t[j].n, t[j+1].n)> 0){
                     aux = t[j], t[j] = t[j+1], t[j+1] = aux;
                }
            }
        }
    }
    for(int i = 0; i<num; i++){
        printf("%s %d %d %d\n", t[i].n, t[i].m[0], t[i].m[1],  t[i].m[2]);
    }
}

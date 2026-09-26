#include <stdio.h>
int main() {
    int v[20], n;
    for(int i = 0 ; i<20 ; i++){
        scanf("%d",&v[i]);
    } 
    for(int i = 0 ; i<10 ; i++){
        n = v[i];
        v[i] = v[19-i];
        v[19-i] = n;
    }
    for(int i = 0 ; i<20 ; i++){
        printf("N[%d] = %d\n",i, v[i]);
    }
}

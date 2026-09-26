#include <stdio.h>
int main(){
    int v[10], n;
    for(int i = 0; i<10; i++){
        scanf("%d",&n);
        v[i] = n > 0? n : 1;
        printf("X[%d] = %d\n",i , v[i]);
    }
}

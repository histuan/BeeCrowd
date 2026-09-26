#include <stdio.h>
int main() {
    int t[1000000], n;
    scanf("%d",&n);
    for(int i = 0; i<1000; i+=n){
        for(int j = 0; j < n; j++){
            t[i+j] = j;
        }
    }
    for(int i = 0; i<1000; i++){
        printf("N[%d] = %d\n",i, t[i]);
    }
}

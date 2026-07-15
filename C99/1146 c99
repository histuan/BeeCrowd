#include <stdio.h>
#include <string.h>
int main() {
    char r [100000], t[20];
    while(1){
        r[0] = '\0';
        int n;
        scanf("%d",&n);
        if(n == 0){
            return 0;
        }
        for(int i = 1; i<=n; i++){
            if(i < n){
                sprintf(t, "%d ", i);
                strcat(r, t);
            } else {
                sprintf(t, "%d\n", i);
                strcat(r,t);
            }
        }
        printf("%s",r);
    }
}

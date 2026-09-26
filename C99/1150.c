#include <stdio.h>
int main() {
    int x, z, y, i;
    scanf("%d", &x);
    y = x;
    do{
        scanf("%d", &z);
    } while(z <= x);
    for(i = 0; y<z ; i++){
    y += x + i;
}
printf("%d\n", i+1);
}

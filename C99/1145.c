#include <stdio.h>
#include <string.h>
int main() {
    char a[100000], b[100];
    int x, y, h = 1, e;
    scanf("%d %d",&x, &y);
    y = y/x;
    for(int i = 1; i<=y; i++){
        a[0] = '\0';
        e = h;
        sprintf(b, "%d", e);
        strcat(a, b);
        for(int j = 1; j<x; j++){
            h++;
            sprintf(b," %d", h);
            strcat(a, b);
        }
        h++;
        printf("%s\n",a);
    }
    return 0;
}

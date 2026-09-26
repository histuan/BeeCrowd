#include <stdio.h>
#include <string.h>
int main() {
    int qtd, x, y = 0, z =1;
    char f[100000] = "", t[20];
    scanf("%d",&qtd);
    for(int i = 0; i < qtd-2; i++){
        x = y + z;
       sprintf(t, i < qtd - 3 ? "%d " : "%d", x);
       strcat(f, t);
        y = z;
        z = x;
    }
    printf("0 1 %s\n", f);
}

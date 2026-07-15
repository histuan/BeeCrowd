#include <stdio.h>
int main() {
    int qtd, n, d;
    scanf("%d",&qtd);
    for(int i = 0; i<qtd; i++){
        d = 0;
        scanf("%d",&n);
        for(int j = 1; j <= n; j++){
            if(n % j == 0){
                d++;
            }
        }
        printf(d == 2? "%d eh primo\n" : "%d nao eh primo\n", n);
    }
}

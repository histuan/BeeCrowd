#include <stdio.h>
int main() {
    int qtd, n;
    long long f[100000] = {0, 1, 1};
    scanf("%d",&qtd);
    for(int i = 0; i<qtd; i++){
        scanf("%d",&n);
        for(int j = 3; j<n+3; j++){
            f[j] = f[j-2] + f[j-1];
        }
        printf("Fib(%d) = %lld\n",n, f[n]);
    }
}

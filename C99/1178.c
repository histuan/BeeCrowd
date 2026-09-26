#include <stdio.h>
int main() {
    double n, f[100];
    scanf("%lf",&n);
    f[0] = n;
for(int i = 0; i<100; i++){
    f[i+1] = n /= 2.0;
    printf("N[%i] = %.4lf\n", i, f[i]);
}
    return 0;
}

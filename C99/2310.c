#include <stdio.h>
int main() {
    int qtd, s[101], b[101], a[101], s1[101],b1[101],a1[101];
    double st = 0, bt = 0, at = 0, sf = 0, bf = 0, af = 0;
    char n[50];
    scanf("%d",&qtd);
    for(int i = 0; i<qtd; i++){
        scanf("%s", &n);
        scanf("%d %d %d", &s[i], &b[i], &a[i]);
        scanf("%d %d %d", &s1[i], &b1[i], &a1[i]);
    }
    for(int i = 0; i<qtd; i++){
        st += s[i];
        bt += b[i];
        at += a[i];
        sf += s1[i];
        bf += b1[i];
        af += a1[i];
    }
    printf("Pontos de Saque: %.2lf %%.\n",sf*100/st);
    printf("Pontos de Bloqueio: %.2lf %%.\n",bf*100/bt);
    printf("Pontos de Ataque: %.2lf %%.\n",af*100/at);
}

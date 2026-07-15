#include <stdio.h>
int main(){
    int qtd, n, c = 0, r = 0, s = 0, t = 0;
    double pc, pr, ps;
    char o;
    scanf("%d",&qtd);
    for(int i = 0; i<qtd; i++){
        scanf("%d %c", &n, &o);
        if(o == 'C'){
            c += n;
        } else if(o == 'R') {
            r += n;
        } else {
            s += n;
        }
        t += n;
    }
    pc = c*100.0/t;
    pr = r*100.0/t;
    ps = s*100.0/t;
    printf("Total: %d cobaias\n",t);
    printf("Total de coelhos: %d\n",c);
    printf("Total de ratos: %d\n",r);
    printf("Total de sapos: %d\n",s);
    printf("Percentual de coelhos: %.2lf %\n",pc);
    printf("Percentual de ratos: %.2lf %\n",pr);
    printf("Percentual de sapos: %.2lf %\n",ps);

}

#include <stdio.h>
int main(){
    int t, anos,meses;
    scanf("%i",&t);
    anos = t/365; t = t%365;
    meses = t/30; t = t%30;
    printf("%i ano(s)\n%i mes(es)\n%i dia(s)\n",anos,meses,t);
    return 0;
}

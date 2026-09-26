#include<stdio.h>
int main(){
    int ti, tf, t;
    scanf("%i %i",&ti, &tf);
    if(ti >= tf){
        t = tf + 24 - ti;
    } else {
        t = tf - ti;
    }
    printf("O JOGO DUROU %i HORA(S)\n",t);
}

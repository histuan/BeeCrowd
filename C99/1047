#include<stdio.h>
int main(){
    int ti, tf, mi, mf, t, m;
    scanf("%i %i %i %i",&ti, &mi, &tf, &mf);
    if(ti >= tf){
        t = tf + 24 - ti;
    } else {
        t = tf - ti;
    }
    if(mi >= mf){
        m = mf + 60 - mi;
        t--;
    } else {
        m = mf - mi;
    }
    if(m >= 60){
        m -= 60;
        t++;
    }
    if(t == 24 && m != 0){
        t = 0;
    }
    printf("O JOGO DUROU %i HORA(S) E %i MINUTO(S)\n",t,m);
}

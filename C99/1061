#include <stdio.h>
int main(){
    int di, hi, mi, si, df, hf, mf, sf, d, h, m, s;
    scanf("Dia %d", &di);
    scanf(" %d : %d : %d",&hi, &mi, &si);
    scanf(" Dia %d", &df);
    scanf(" %d : %d : %d",&hf, &mf, &sf);
    d = df - di;
    if(hi>= hf){
        d--;
        h = hf + 24 - hi;
    } else {
        h = hf - hi;
    } 
    if(mi>=mf){
        h--;
        m = mf + 60-mi;
    } else {
        m = mf-mi;
    }
    if(si>=sf){
        m--;
        s = sf + 60 - si;
    } else {
        s = sf - si;
    }
    if(s >= 60){
        s-=60; m++;
    }
    if(m >= 60){
        m-=60; h++;
    }
    if(h >= 24){
        h-=24; d++;
    }
    printf("%d dia(s)\n",d);
    printf("%d hora(s)\n",h);
    printf("%d minuto(s)\n",m);
    printf("%d segundo(s)\n",s);
    
}

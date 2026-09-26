#include <stdio.h>
int main(){
    int s, t, f, h;
    scanf("%i %i %i", &s, &t, &f);
    if(s + t > 24){
        h = s+t - 24 + f;
    } else {
        h = s+t+f;
    } 
    if(h == 24){
        h = 0;
    } else if(h<0){
        h +=24;
    }
    printf("%i\n",h);
}

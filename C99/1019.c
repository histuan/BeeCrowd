#include <stdio.h>
int main(){
    int h,m,t;
    scanf("%i",&t);
    h = t/3600; t = t%3600;
    m = t/60; t = t%60;
    printf("%i:%i:%i\n",h,m,t);
    return 0;
}

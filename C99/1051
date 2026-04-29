#include <stdio.h>
int main(){
    double s, i = 0;
    scanf("%lf",&s);
    if(s<=2000){
        printf("Isento\n");
        return 0;
    } else if(s>2000 && s<=3000){
        i += (s-2000)*8/100;
    } else if(s>3000 && s<=4500){
        i += 1000*8/100;
        i += (s - 3000)*18/100;
    } else {
        i += 1000*8/100;
        i += 1500*18/100;
        i += (s - 4500)*28/100;
    }
    printf("R$ %.2lf\n",i);
}

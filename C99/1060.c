#include <stdio.h>
int main(){
    int c = 0;
    double n;
    for(int i = 0; i<6; i++){
        scanf("%lf",&n);
        if(n > 0){
            c++;
        }
    }
    printf("%i valores positivos\n",c);
}

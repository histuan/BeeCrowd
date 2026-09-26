#include <stdio.h> 
#include <math.h>
int main(){
    double j = 1;
    for(double i = 0; i<2 ; i+=0.2){
        for(int n = 0; n<3; n++){
            printf("I=%g J=%g\n",i,j+n);
        }
        j +=0.2;
    }
}

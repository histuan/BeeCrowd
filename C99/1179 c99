#include <stdio.h>
int main() {
     int par[5], impar[5], n, cp, ci;
     ci = 0; cp = 0;
     for(int i = 0 ; i<15; i++){
         scanf("%d",&n);
         if(n % 2 == 0){
             par[cp] = n;
             cp++;
         } else {
             impar[ci] = n;
             ci++;
         }
         if(cp == 5){
             for(int i = 0 ; i<5; i++){
                 printf("par[%d] = %d\n",i,par[i]);
             }
             cp = 0;
         }
         if(ci == 5){
             for(int i = 0; i<5; i++){
                 printf("impar[%d] = %d\n",i,impar[i]);
             }
             ci = 0;
         }
     }
    for(int i = 0; i<ci; i++){
        printf("impar[%d] = %d\n",i,impar[i]);
    }
    for(int i = 0; i<cp; i++){
        printf("par[%d] = %d\n",i,par[i]);
    }
}

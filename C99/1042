#include<stdio.h>
int meio, menor;
void mm(int x, int y){
    if(x>y){
        meio = x;
        menor = y;
    } else {
        meio = y;
        menor = x;
    }
}
int main(){
    int a, b, c, maior;
    scanf("%i %i %i",&a, &b, &c);
    if(a>b && a>c){
        maior = a;
        mm(b,c);
    } else if(b>a && b>c){
        maior = b;
        mm(a,c);
    } else {
        maior = c;
        mm(b,a);
    }
    printf("%i\n",menor);
    printf("%i\n",meio);
    printf("%i\n",maior);
    printf("\n");
    printf("%i\n",a);
    printf("%i\n",b);
    printf("%i\n",c);
    return 0;
}

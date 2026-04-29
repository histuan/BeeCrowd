#include <stdio.h>
#include <string.h>
int main(){
    int a, b, c;
    char r[20], sn[2];
    scanf("%i %i %i", &a, &b, &c);
    if(a>=b+c || b>=c+a || c>=a+b){
        printf("Invalido\n");
        return 0;
    } else if(a == b && a == c){
        strcpy(r, "Valido-Equilatero");
    } else if(a != b && a!=c && b!=c) {
        strcpy(r, "Valido-Escaleno");
    } else if(a == b && a != c || a == c && a != b || c == b && c != a){
        strcpy(r, "Valido-Isoceles");
    }
    if(a*a == b*b + c*c || b*b == a*a + c*c || c*c == a*a + b*b){
        strcpy(sn, "S");
    } else {
        strcpy(sn, "N");
    }
    printf("%s\nRetangulo: %s\n",r,sn);
}

#include <stdio.h>
double a, b, c;
void mm(double x, double y){
    if(x>y){
        b = x;
        c = y;
    } else {
        c = x;
        b = y;
    }
}
int main(){
    double x, y, z;
    scanf("%lf %lf %lf", &x, &y, &z);
    if(x>y && x>z){
        a = x;
        mm(y,z);
    } else if(y>x && y>z){
        a = y;
        mm(x,z);
    } else {
        a = z;
        mm(x,y);
    }
    if(a>=b+c){
        printf("NAO FORMA TRIANGULO\n");
        return 0;
    } else if(a*a == b*b+c*c){
        printf("TRIANGULO RETANGULO\n");
    } else if(a*a>b*b+c*c){
        printf("TRIANGULO OBTUSANGULO\n");
    } else if(a*a<b*b+c*c){
        printf("TRIANGULO ACUTANGULO\n");
    }
    if(a == b && a == c && b ==c){
        printf("TRIANGULO EQUILATERO\n");
    } else if(a==b && a!=c||b == c && b != a||c == a && c !=b){
        printf("TRIANGULO ISOSCELES\n");
    }
}

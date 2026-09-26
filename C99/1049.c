#include <stdio.h>
#include <string.h>
int main(){
    char o[20], f[20], g[20], n[20];
    scanf("%s %s %s", o, f, g);
    if(strcmp(o, "vertebrado") == 0){
        if(strcmp(f, "ave") == 0){
            if(strcmp(g, "carnivoro") == 0){
                strcpy(n, "aguia");
            } else {
                strcpy(n, "pomba");
            }
        } else {
            if(strcmp(g, "onivoro") == 0){
                strcpy(n, "homem");
            } else {
                strcpy(n, "vaca");
            }
        }
    } else {
        if(strcmp(f, "inseto") == 0){
            if(strcmp(g, "hematofago") == 0){
                strcpy(n, "pulga");
            } else {
                strcpy(n, "lagarta");
            }
        } else {
            if(strcmp(g, "hematofago") == 0 ){
                strcpy(n, "sanguessuga");
            } else {
                strcpy(n, "minhoca"); 
            }
        }
    }
    printf("%s\n",n);
}

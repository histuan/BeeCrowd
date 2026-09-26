#include <stdio.h>
int main(){
    int g = 0, gg, gi, ggt = 0, git = 0, a, e =0;
    while(1){
        g++;
        scanf("%d %d", &gi, &gg);
        if(gg > gi){
            ggt++;
        } else if (gg < gi){
            git++;
        } else if (gg == gi){
            e++;
        }
        printf("Novo grenal (1-sim 2-nao)\n");
        scanf("%d",&a);
        if(a == 1){
            continue;
        } else {
            break;
        }
    }
    printf("%d grenais\n",g);
    printf("Inter:%d\n",git);
    printf("Gremio:%d\n",ggt);
    printf("Empates:%d\n",e);
    if(ggt > git){
        printf("Gremio venceu mais\n");
    } else if (git > ggt){
        printf("Inter venceu mais\n");
    } else {
        printf("Nao houve vencedor\n");
    }
}

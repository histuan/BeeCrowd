while(true){
    var qtd = 0;
    var[x1, y1, x2, y2] = prompt().split(" ").map(Number);
    if(x1 == 0 && y1 == 0 && x2 == 0 && y2 == 0){
        break;
    }
    if(x1 == x2 && y1 == y2){
        qtd = 0;
    } else if(Math.abs(y2 - y1) == Math.abs(x2 - x1)){
        qtd = 1;
    } else if(x1 == x2 || y1 == y2){
        qtd = 1;
    } else {
        qtd = 2;
    }
    console.log(qtd);
}

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var [HI, MI, HF, MF] = prompt().split(" ").map(Number);
var H,M;
function minuto(x,y){
    if(x>y){
        H = H - 1;
        M = (60-x+y);
    } else {
        M = y - x;
    }
}
if(HI > HF){
    H = (24-HI+HF);
    minuto(MI,MF);
} else if(HI == HF && MF > MI){
    H = HF - HI ;
    M = MF - MI;
} else if (HI == HF && MF <= MI){
    H = (24-HI+HF);
    minuto(MI,MF);
} else {
    H = (HF-HI);
    minuto(MI,MF);
    }
console.log("O JOGO DUROU "+H+" HORA(S) E "+M+" MINUTO(S)");

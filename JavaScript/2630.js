var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var p;
function eye (R, G, B){
    p = R * 0.30 + G *0.59 + B*0.11;
}
function mean (R, G, B){
    p = (R + G + B)/3;
}
function min(R, G, B){
    var RG = Number((R+G-Math.abs(R-G))/2);
    var minn = Number((RG+B-Math.abs(RG-B))/2);
    p = minn;
}
function max(R, G, B){
    var RG = Number((R+G+Math.abs(R-G))/2);
    var maxx = Number((RG+B+Math.abs(RG-B))/2);
    p = maxx;
}
var t = +prompt();
for(var i = 1; i<=t; i++){
    var c = prompt();
    var [r, g, b] = prompt().split(" ").map(Number);
    if(c == "eye"){
        eye(r, g, b);
    } else if (c == "mean"){
        mean(r, g, b);
    } else if(c == "min"){
        min(r, g, b);
    } else {
        max(r, g, b);
    }
    console.log("Caso #"+i+": "+Math.floor(p));
}

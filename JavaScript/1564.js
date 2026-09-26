const lines = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
var i = 0;

while (i < lines.length && lines[i].trim() !== '') {
    var N = Number(lines[i].trim());

    if (N === 0) {
        console.log("vai ter copa!");
    } else {
        console.log("vai ter duas!");
    }

    i++;
}

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
let n = parseFloat(input);

// Configurador de formatação: 4 casas decimais fixas e arredondamento padrão 'halfExpand'
const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 4,
    maximumFractionDigits: 4,
    useGrouping: false
});

for (let i = 0; i < 100; i++) {
    // A mágica acontece aqui: o format() lida com a precisão melhor que o toFixed()
    console.log(`N[${i}] = ${formatter.format(n)}`);
    n /= 2.0;
}
